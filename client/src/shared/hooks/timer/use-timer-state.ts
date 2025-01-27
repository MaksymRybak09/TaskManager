import { IPomodoroRound } from '@/shared/types/pomodoro.types'
import { useEffect, useState } from 'react'
import { useLoadSettings } from '../users/use-load-settings'

export const useTimerState = () => {
  const { workInterval, breakInterval } = useLoadSettings()

  const [isRunning, setIsRunning] = useState(false)
  const [isBeakTime, setIsBeakTime] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(workInterval * 60)
  const [activeRound, setActiveRound] = useState<IPomodoroRound>()

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRunning) {
      interval = setInterval(
        () => setSecondsLeft((secondsLeft) => secondsLeft - 1),
        1000,
      )
    } else if (!isRunning && secondsLeft !== 0 && interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, secondsLeft, workInterval, activeRound])

  useEffect(() => {
    if (secondsLeft > 0) return
    setIsBeakTime(!isBeakTime)
    setSecondsLeft((isBeakTime ? workInterval : breakInterval) * 60)
  }, [secondsLeft, isBeakTime, workInterval, breakInterval])

  return {
    workInterval,
    breakInterval,
    activeRound,
    setActiveRound,
    secondsLeft,
    setSecondsLeft,
    isRunning,
    setIsRunning,
  }
}
