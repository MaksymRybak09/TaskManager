import { IUser } from './user.types'

export interface IAuthForm {
  name?: string
  email: string
  password: string
}

export interface IOidcAuthForm {
  name: string
  email: string
}

export interface IAuthResponse {
  accessToken: string
  user: IUser
}
