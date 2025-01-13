import { authAxios } from '@/shared/api/interseptors'
import { ITimeBlock, TimeBlockFormState } from '@/shared/types/time-block.types'

class TimeBlockService {
  private baseURL = 'time-blocks'

  async getTimeBlocks() {
    const response = await authAxios.get<ITimeBlock>(this.baseURL)
    return response.data
  }

  async createTimeBlock(data: TimeBlockFormState) {
    const response = await authAxios.post(this.baseURL, data)
    return response.data
  }

  async updateTimeBlock(id: string, data: TimeBlockFormState) {
    const response = await authAxios.put(`${this.baseURL}/${id}`, data)
    return response.data
  }

  async updateOrderTimeBlock(ids: string[]) {
    const response = await authAxios.put(`${this.baseURL}/update-order}`, ids)
    return response.data
  }

  async deleteTimeBlock(id: string) {
    const response = await authAxios.delete(`${this.baseURL}/${id}`)
    return response.data
  }
}

export const timeBlockService = new TimeBlockService()
