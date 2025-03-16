import { pomodoroService } from '@/shared/services/pomodoro/pomodoro.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateTimer = () => {
  const queryClient = useQueryClient()

  const { mutate: createTimer, isPending: isCreateTimerPending } = useMutation({
    mutationKey: ['create new timer'],
    mutationFn: () => pomodoroService.createTimer(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['timer'],
      })
    },
  })

  return {
    createTimer,
    isCreateTimerPending,
  }
}
