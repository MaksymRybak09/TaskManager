import { pomodoroService } from '@/shared/services/pomodoro/pomodoro.service'
import { useQuery } from '@tanstack/react-query'

export const useGetTimer = () => {
  const { data: timer, isPending: isTimerPending } = useQuery({
    queryKey: ['timer'],
    queryFn: () => pomodoroService.getTimer(),
  })

  return {
    timer,
    isTimerPending,
  }
}
