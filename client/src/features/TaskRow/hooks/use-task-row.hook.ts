import { useTaskDebounce } from '@/shared/hooks/tasks/use-task-debounce'
import { ITask, PriorityOption, TaskFormState } from '@/shared/types/task.types'
import { useForm } from 'react-hook-form'

export const useTaskRow = (item: ITask, priorities: string[]) => {
  const { register, control, watch } = useForm<TaskFormState>({
    defaultValues: {
      name: item.name,
      isCompleted: item.isCompleted,
      createdAt: item.createdAt,
      priority: item.priority,
    },
  })

  useTaskDebounce({ watch, itemID: item.id })

  const priorityOptions: PriorityOption[] = priorities.map((item) => ({
    value: item,
    label: item.toLowerCase(),
  }))

  return { register, control, priorityOptions }
}
