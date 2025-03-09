import { useCreateSession } from '@/shared/hooks/timer/use-create-session'
import { useDeleteSession } from '@/shared/hooks/timer/use-delete-session'
import { useTimerActions } from '@/shared/hooks/timer/use-timer-actions'
import { useTimerState } from '@/shared/hooks/timer/use-timer-state'
import { useTodaySession } from '@/shared/hooks/timer/use-today-session'
import { useUpdateRound } from '@/shared/hooks/timer/use-update-round'

export const useTimer = () => {
  const timerState = useTimerState()
  const todaySession = useTodaySession({
    setActiveRound: timerState.setActiveRound,
    setSecondsLeft: timerState.setSecondsLeft,
    workInterval: timerState.workInterval,
  })

  const rounds = todaySession.session?.rounds
  const timerActions = useTimerActions({
    rounds,
    activeRound: timerState.activeRound,
    setActiveRound: timerState.setActiveRound,
    secondsLeft: timerState.secondsLeft,
    setSecondsLeft: timerState.setSecondsLeft,
    setIsRunning: timerState.setIsRunning,
  })

  const { createSession, isCreateSessionPending } = useCreateSession()
  const { isUpdateRoundPending } = useUpdateRound()
  const { deleteSession, isDeleteSessionPending } = useDeleteSession(() =>
    timerState.setSecondsLeft(timerState.workInterval * 60),
  )

  return {
    session: todaySession.session,
    isSessionLoading: todaySession.isSessionLoading,
    createSession,
    isCreateSessionPending,
    deleteSession,
    isDeleteSessionPending,
    secondsLeft: timerState.secondsLeft,
    rounds,
    isUpdateRoundPending,
    activeRound: timerState.activeRound,
    nextRoundHandler: timerActions.nextRoundHandler,
    prevRoundHandler: timerActions.prevRoundHandler,
    pauseHandler: timerActions.pauseHandler,
    playHandler: timerActions.playHandler,
    isRunning: timerState.isRunning,
    setIsRunning: timerState.setIsRunning,
  }
}
