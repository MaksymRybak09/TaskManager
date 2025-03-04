import { useMutation, useQueryClient } from '@tanstack/react-query'
import { taskService } from '../../services/task/task.service'

export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteTask, isPending: isDeletePending } = useMutation({
    mutationKey: ['delete task'],
    mutationFn: (id: string) => taskService.daleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
  })

  return { deleteTask, isDeletePending }
}
