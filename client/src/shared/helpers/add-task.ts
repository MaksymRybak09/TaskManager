import { Dispatch, SetStateAction } from 'react'
import { ITask, TaskPriority } from '../types/task.types'

export const addTask = (
  setItems: Dispatch<SetStateAction<ITask[] | undefined>>,
  filterDate?: string,
) => {
  setItems((prev) => {
    if (!prev) {
      return
    }

    return [
      ...prev,
      {
        id: 'for-create',
        name: '',
        isCompleted: false,
        createdAt: filterDate,
        priority: TaskPriority.LOW,
      },
    ]
  })
}
