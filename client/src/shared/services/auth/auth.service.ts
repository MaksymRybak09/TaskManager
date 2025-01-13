import { baseAxios } from '../../api/interseptors'
import { IAuthForm, IAuthresponse } from '../../types/auth.types'
import {
  removeTokenFromStorage,
  saveTokenToStorage,
} from './auth-token.service'

class AuthService {
  async main(type: 'login' | 'register', data: IAuthForm) {
    const resmonse = await baseAxios.post<IAuthresponse>(`/auth/${type}`, data)

    if (resmonse.data.token) {
      saveTokenToStorage(resmonse.data.token)
    }

    return resmonse
  }

  async getNewTokens() {
    const resmonse = await baseAxios.get<IAuthresponse>(
      `/auth/log-in/access-token`,
    )

    if (resmonse.data.token) {
      saveTokenToStorage(resmonse.data.token)
    }

    return resmonse
  }

  async logOut() {
    const resmonse = await baseAxios.get<boolean>(`/auth/log-out`)

    if (resmonse.data) {
      removeTokenFromStorage()
    }

    return resmonse
  }
}

export const authService = new AuthService()
