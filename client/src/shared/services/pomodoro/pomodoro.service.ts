import { authAxios } from '@/shared/api/interseptors'
import type {
  IPomodoroTimer,
  PomodoroTimerState,
} from '@/shared/types/pomodoro.types'

class PomodoroService {
  private baseURL = 'timer'

  async getTimer() {
    const response = await authAxios.get<IPomodoroTimer>(`${this.baseURL}`)
    return response.data
  }

  async createTimer() {
    const response = await authAxios.post<IPomodoroTimer>(this.baseURL)
    return response.data
  }

  async updateTimer(id: string, data: PomodoroTimerState) {
    const response = await authAxios.put<IPomodoroTimer>(
      `${this.baseURL}/${id}`,
      data,
    )
    return response.data
  }

  async deleteTimer(id: string) {
    const response = await authAxios.delete<IPomodoroTimer>(
      `${this.baseURL}/${id}`,
    )
    return response.data
  }
}

export const pomodoroService = new PomodoroService()
