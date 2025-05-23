import { baseAxios } from '../../api/interseptors'
import type {
  IAuthForm,
  IAuthResponse,
  IOidcAuthForm,
} from '../../types/auth.types'
import {
  removeTokenFromStorage,
  saveTokenToStorage,
} from './auth-token.service'

class AuthService {
  async register(data: IAuthForm) {
    const response = await baseAxios.post<IAuthResponse>(`/auth/register`, data)

    if (response.data.accessToken) {
      saveTokenToStorage(response.data.accessToken)
    }

    return response
  }

  async logIn(data: IAuthForm) {
    const response = await baseAxios.post<IAuthResponse>(`/auth/log-in`, data)

    if (response.data.accessToken) {
      saveTokenToStorage(response.data.accessToken)
    }

    return response
  }

  async signIn(data: IOidcAuthForm) {
    const response = await baseAxios.post<IAuthResponse>(`/auth/sign-in`, data)

    if (response.data.accessToken) {
      saveTokenToStorage(response.data.accessToken)
    }

    return response
  }

  async getNewTokens() {
    const response = await baseAxios.get<IAuthResponse>(
      `/auth/log-in/access-token`,
    )

    if (response.data.accessToken) {
      saveTokenToStorage(response.data.accessToken)
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
