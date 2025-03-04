import { authAxios } from '@/shared/api/interseptors'
import type { IUser, UserForm } from '@/shared/types/user.types'

class UserService {
  private baseURL = 'profile'

  async getProfile() {
    const response = await authAxios.get<IUser>(this.baseURL)
    return response.data
  }

  async update(data: UserForm) {
    const response = await authAxios.put<UserForm>(this.baseURL, data)
    return response.data
  }
}

export const userService = new UserService()
