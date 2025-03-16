import { pomodoroService } from '@/shared/services/pomodoro/pomodoro.service'
import type { PomodoroTimerState } from '@/shared/types/pomodoro.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateTimer = () => {
  const queryClient = useQueryClient()

  const { mutate: updateTimer, isPending: isupdateTimerPending } = useMutation({
    mutationKey: ['update timer'],
    mutationFn: ({ id, dto }: { id: string; dto: PomodoroTimerState }) =>
      pomodoroService.updateTimer(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['timer'],
      })
    },
  })

  return {
    updateTimer,
    isupdateTimerPending,
  }
}
