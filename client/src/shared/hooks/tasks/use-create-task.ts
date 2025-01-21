import { useMutation, useQueryClient } from '@tanstack/react-query'
import { taskService } from '../../services/task/task.service'
import { TaskFormState } from '../../types/task.types'

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  const { mutate: createTask } = useMutation({
    mutationKey: ['create task'],
    mutationFn: (data: TaskFormState) => taskService.createTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
  })

  return { createTask }
}
