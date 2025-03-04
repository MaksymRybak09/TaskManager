import { authAxios } from '@/shared/api/interseptors'
import type { IStatistics } from '@/shared/types/statistics.types'

class StatisticsService {
  private baseURL = 'statistics'

  async getFullStats() {
    const response = await authAxios.get<IStatistics>(`${this.baseURL}/full`)
    return response.data
  }
}

export const statisticsService = new StatisticsService()
