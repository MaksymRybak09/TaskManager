export interface IUser {
  id: String
  name?: String
  email: String
  workInterval?: number
  breakInterval?: number
  intervalsCount?: number
}

export interface IProfileResponse {
  user: IUser
  statistics: {
    label: string
    value: string
  }
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
