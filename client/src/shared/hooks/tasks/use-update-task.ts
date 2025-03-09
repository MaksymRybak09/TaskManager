import { taskService } from '@/shared/services/task/task.service'
import type { TaskForm } from '@/shared/types/task.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateTask = (key?: string) => {
  const queryClient = useQueryClient()

  const { mutate: updateTask } = useMutation({
    mutationKey: ['update-task', key],
    mutationFn: ({ id, data }: { id: string; data: TaskForm }) =>
      taskService.updateTask(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
  })

  return { updateTask }
}
