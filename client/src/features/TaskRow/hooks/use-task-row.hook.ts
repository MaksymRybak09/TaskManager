import { capitalizeFirstLetter } from '@/shared/helpers/capitalized-first-letter'
import { useTaskDebounce } from '@/shared/hooks/tasks/use-task-debounce'
import type { SelectOptions } from '@/shared/types/select.types'
import type { ITask, TaskFormState } from '@/shared/types/task.types'
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

  const priorityOptions: SelectOptions = priorities.map((item) => ({
    value: item,
    label: capitalizeFirstLetter(item.toLowerCase()),
  }))

  return { register, control, priorityOptions }
}
