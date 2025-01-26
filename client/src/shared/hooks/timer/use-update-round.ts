import { pomodoroService } from '@/shared/services/pomodoro/pomodoro.service'
import { PomodoroRoundState } from '@/shared/types/pomodoro.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateRound = () => {
  const queryClient = useQueryClient()

  const { mutate: updateRound, isPending: isUpdateRoundPending } = useMutation({
    mutationKey: ['update round'],
    mutationFn: ({ id, data }: { id: string; data: PomodoroRoundState }) =>
      pomodoroService.updateRound(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get today session'],
      })
    },
  })
  return { updateRound, isUpdateRoundPending }
}
