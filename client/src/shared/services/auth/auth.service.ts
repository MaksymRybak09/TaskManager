import { baseAxios } from '../../api/interseptors'
import { IAuthForm, IAuthresponse } from '../../types/auth.types'
import {
  removeTokenFromStorage,
  saveTokenToStorage,
} from './auth-token.service'

class AuthService {
  async register(data: IAuthForm) {
    const response = await baseAxios.post<IAuthresponse>(`/auth/register`, data)

    if (response.data.token) {
      saveTokenToStorage(response.data.token)
    }

    return response
  }

  async logIn(data: IAuthForm) {
    const response = await baseAxios.post<IAuthresponse>(`/auth/log-in`, data)

    if (response.data.token) {
      saveTokenToStorage(response.data.token)
    }

    return response
  }

  async getNewTokens() {
    const response = await baseAxios.get<IAuthresponse>(
      `/auth/log-in/access-token`,
    )

    if (response.data.token) {
      saveTokenToStorage(response.data.token)
    }

    return response
  }

  async logOut() {
    const response = await baseAxios.get<boolean>(`/auth/log-out`)

    if (response.data) {
      removeTokenFromStorage()
    }

    return response
  }
}

export const authService = new AuthService()
