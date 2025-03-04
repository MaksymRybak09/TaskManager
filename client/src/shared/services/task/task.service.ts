import { authAxios } from '@/shared/api/interseptors'
import type { ITask, TaskFormState } from '@/shared/types/task.types'

class TaskService {
  private baseURL = 'tasks'

  async getTasks() {
    const response = await authAxios.get<ITask[]>(this.baseURL)
    return response.data
  }

  async createTask(data: TaskFormState) {
    const response = await authAxios.post(this.baseURL, data)
    return response.data
  }

  async updateTask(id: string, data: TaskFormState) {
    const response = await authAxios.put(`${this.baseURL}/${id}`, data)
    return response.data
  }

  async daleteTask(id: string) {
    const response = await authAxios.delete(`${this.baseURL}/${id}`)
    return response.data
  }
}

export const taskService = new TaskService()
