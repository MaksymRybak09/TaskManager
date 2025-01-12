import { IUser } from './user.types'

export interface IAuthForm {
  email: string
  password: string
}

export interface IAuthresponse {
  token: string
  user: IUser
}
