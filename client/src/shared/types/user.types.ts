export interface IUser {
  id: string
  name?: string
  email: string
  workInterval?: number
  breakInterval?: number
  intervalsCount?: number
}

export type UserForm = Omit<IUser, 'id'> & { password?: string }
