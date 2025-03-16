import { useCreateTimer } from '@/shared/hooks/timer/use-create-timer'
import { useDeleteTimer } from '@/shared/hooks/timer/use-delete-timer'
import { useGetTimer } from '@/shared/hooks/timer/use-get-timer'
import { useTimerActions } from '@/shared/hooks/timer/use-timer-actions'
import { useTimerState } from '@/shared/hooks/timer/use-timer-state'

export const useTimer = () => {
  const { timer, isTimerPending } = useGetTimer()
  const { createTimer, isCreateTimerPending } = useCreateTimer()
  const { deleteTimer, isDeleteTimerPending } = useDeleteTimer()

  const {
    secondsLeftState,
    isRunning,
    setIsRunning,
    setActiveRound,
    isBreakTime,
  } = useTimerState(
    timer?.id ?? '',
    timer?.isWorkingTime ?? true,
    timer?.currentRound ?? 1,
    timer?.secondsLeft ?? 0,
    timer?.rounds ?? 7,
  )

  const { nextRoundHandler, prevRoundHandler, pauseHandler, playHandler } =
    useTimerActions({
      id: timer?.id ?? '',
      currentRound: timer?.currentRound ?? 1,
      setActiveRound,
      setIsRunning,
      secondsLeftState,
    })

  return {
    timer,
    isTimerPending,
    createTimer,
    isCreateTimerPending,
    deleteTimer,
    isDeleteTimerPending,
    secondsLeftState,
    isRunning,
    isBreakTime,
    nextRoundHandler,
    prevRoundHandler,
    pauseHandler,
    playHandler,
  }
}
