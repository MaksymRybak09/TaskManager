import { Dispatch, SetStateAction } from 'react'
import { useUpdateTimer } from './use-update-timer'

interface ITimeActions {
  id: string
  currentRound: number
  setIsRunning: Dispatch<SetStateAction<boolean>>
  setActiveRound: Dispatch<SetStateAction<number>>
  secondsLeftState: number
}

export const useTimerActions = ({
  id,
  currentRound,
  setIsRunning,
  setActiveRound,
  secondsLeftState,
}: ITimeActions) => {
  const { updateTimer } = useUpdateTimer()

  const pauseHandler = () => {
    setIsRunning(false)
    updateTimer({ id, dto: { secondsLeft: secondsLeftState } })
  }

  const playHandler = () => setIsRunning(true)

  const nextRoundHandler = () => {
    const nextRound = currentRound + 1
    setActiveRound(nextRound)
    updateTimer({ id, dto: { currentRound: nextRound } })
  }

  const prevRoundHandler = () => {
    if (currentRound === 1) return
    const prevRound = currentRound - 1
    setActiveRound(prevRound)
    updateTimer({ id, dto: { currentRound: prevRound } })
  }

  return {
    pauseHandler,
    playHandler,
    nextRoundHandler,
    prevRoundHandler,
  }
}
