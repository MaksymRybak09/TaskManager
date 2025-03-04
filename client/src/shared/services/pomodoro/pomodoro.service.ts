import { authAxios } from '@/shared/api/interseptors'
import type {
  IPomodoroSession,
  PomodoroSessionState,
} from '@/shared/types/pomodoro.types'

class PomodoroService {
  private baseURL = 'timer'

  async getTodaySession() {
    const response = await authAxios.get<IPomodoroSession>(
      `${this.baseURL}/today`,
    )
    return response.data
  }

  async createSession() {
    const response = await authAxios.post<IPomodoroSession>(this.baseURL)
    return response.data
  }

  async updateSession(id: string, data: PomodoroSessionState) {
    const response = await authAxios.put(`${this.baseURL}/${id}`, data)
    return response.data
  }

  async deleteSession(id: string) {
    const response = await authAxios.delete(`${this.baseURL}/${id}`)
    return response.data
  }

  async updateRound(id: string, data: PomodoroSessionState) {
    const response = await authAxios.put(`${this.baseURL}/round/${id}`, data)
    return response.data
  }
}

export const pomodoroService = new PomodoroService()
