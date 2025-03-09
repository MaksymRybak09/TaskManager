export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
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
