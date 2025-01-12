export enum TaskPriority {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export interface ITask {
  id: string
  createdAt?: string
  updatedAt?: string
  name: string
  priority: TaskPriority
  isCompleted: boolean
}

export type TaskFormState = Partial<Omit<ITask, 'id' | 'updatedAt'>>
