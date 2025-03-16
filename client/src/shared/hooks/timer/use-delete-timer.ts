import { pomodoroService } from '@/shared/services/pomodoro/pomodoro.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteTimer = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteTimer, isPending: isDeleteTimerPending } = useMutation({
    mutationKey: ['delete timer'],
    mutationFn: (id: string) => pomodoroService.deleteTimer(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['timer'],
      })
    },
  })

  return {
    deleteTimer,
    isDeleteTimerPending,
  }
}
