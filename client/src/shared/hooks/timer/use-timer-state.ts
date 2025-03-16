import { useEffect, useState } from 'react'
import { useLoadSettings } from '../users/use-load-settings'
import { useUpdateTimer } from './use-update-timer'

export const useTimerState = (
  id: string,
  isWorkingTime: boolean,
  currentRound: number,
  secondsLeft: number,
  totalRounds: number,
) => {
  const { workInterval, breakInterval } = useLoadSettings()
  const { updateTimer } = useUpdateTimer()

  const [isRunning, setIsRunning] = useState(false)
  const [secondsLeftState, setSecondsLeft] = useState(secondsLeft)
  const [activeRound, setActiveRound] = useState(currentRound)
  const [isBreakTime, setIsBreakTime] = useState(!isWorkingTime)

  useEffect(() => {
    setSecondsLeft(secondsLeft)
    setActiveRound(currentRound)
    setIsBreakTime(!isWorkingTime)
  }, [secondsLeft, currentRound, isWorkingTime])

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  useEffect(() => {
    if (secondsLeftState > 0) return

    if (activeRound >= totalRounds && isBreakTime) {
      setIsRunning(false)
      updateTimer({ id, dto: { isCompleted: true } })
      return
    }

    const nextIsBreakTime = !isBreakTime
    const nextRound = !nextIsBreakTime ? activeRound + 1 : activeRound
    const newTime = (nextIsBreakTime ? breakInterval : workInterval) * 60

    setIsBreakTime(nextIsBreakTime)
    setActiveRound(nextRound)
    setSecondsLeft(newTime)

    if (id) {
      updateTimer({
        id,
        dto: {
          isWorkingTime: !nextIsBreakTime,
          currentRound: nextRound,
          secondsLeft: newTime,
        },
      })
    }
  }, [
    secondsLeftState,
    activeRound,
    totalRounds,
    breakInterval,
    workInterval,
    isBreakTime,
    id,
    updateTimer,
  ])

  return {
    activeRound,
    setActiveRound,
    secondsLeftState,
    isRunning,
    setIsRunning,
    isBreakTime,
  }
}
