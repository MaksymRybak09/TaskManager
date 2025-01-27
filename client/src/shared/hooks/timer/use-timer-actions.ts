import { IPomodoroRound } from '@/shared/types/pomodoro.types'
import { Dispatch, SetStateAction } from 'react'
import { useLoadSettings } from '../users/use-load-settings'
import { useUpdateRound } from './use-update-round'

interface ITimerActions {
  secondsLeft: number
  setSecondsLeft: Dispatch<SetStateAction<number>>
  activeRound: IPomodoroRound | undefined
  setActiveRound: Dispatch<SetStateAction<IPomodoroRound | undefined>>
  setIsRunning: Dispatch<SetStateAction<boolean>>
  rounds: IPomodoroRound[] | undefined
}

export const useTimerActions = (params: ITimerActions) => {
  const { workInterval } = useLoadSettings()
  const { updateRound } = useUpdateRound()

  const activeRoundID = params.activeRound?.id

  const pauseHandler = () => {
    params.setIsRunning(false)

    if (!activeRoundID) return
    updateRound({
      id: activeRoundID,
      data: {
        totalSeconds: params.secondsLeft,
        isCompleted: Math.floor(params.secondsLeft / 60) >= workInterval,
      },
    })
  }

  const playHandler = () => params.setIsRunning(true)

  const nextRoundHandler = () => {
    if (!activeRoundID) return

    updateRound({
      id: activeRoundID,
      data: {
        isCompleted: true,
        totalSeconds: workInterval * 60,
      },
    })
  }

  const prevRoundHandler = () => {
    const lastCompletedRound = params.rounds?.findLast(
      (round) => round.isCompleted,
    )
    if (!lastCompletedRound?.id) return

    updateRound({
      id: lastCompletedRound.id,
      data: {
        isCompleted: false,
        totalSeconds: 0,
      },
    })

    params.setActiveRound(lastCompletedRound)
  }

  return { pauseHandler, playHandler, nextRoundHandler, prevRoundHandler }
}
