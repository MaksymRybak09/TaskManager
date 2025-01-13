import { authAxios } from '@/shared/api/interseptors'
import { IProfileResponse, TypeUserForm } from '@/shared/types/user.types'

class UserService {
  private baseURL = 'profile'

  async getProfile() {
    const response = await authAxios.get<IProfileResponse>(this.baseURL)
    return response.data
  }

  async update(data: TypeUserForm) {
    const response = await authAxios.put(this.baseURL, data)
    return response.data
  }
}

export const userService = new UserService()
