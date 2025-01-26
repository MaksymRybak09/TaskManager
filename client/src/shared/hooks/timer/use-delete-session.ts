import { pomodoroService } from '@/shared/services/pomodoro/pomodoro.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteSession = (onDeleteSuccess: () => void) => {
  const queryClient = useQueryClient()

  const { mutate: deleteSession, isPending: isDeleteSessionPending } =
    useMutation({
      mutationKey: ['delete session'],
      mutationFn: (is: string) => pomodoroService.deleteSession(is),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['get today session'],
        })
        onDeleteSuccess()
      },
    })

  return {
    deleteSession,
    isDeleteSessionPending,
  }
}
