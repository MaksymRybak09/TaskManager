import { pomodoroService } from '@/shared/services/pomodoro/pomodoro.service'
import { IPomodoroRound } from '@/shared/types/pomodoro.types'
import { useQuery } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useEffect } from 'react'

interface IUseTodaySession {
  setActiveRound: Dispatch<SetStateAction<IPomodoroRound | undefined>>
  setSecondsLeft: Dispatch<SetStateAction<number>>
  workInterval: number
}

export const useTodaySession = (params: IUseTodaySession) => {
  const {
    data: session,
    isLoading: isSessionLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['get today session'],
    queryFn: () => pomodoroService.getTodaySession(),
  })

  const rounds = session?.rounds

  useEffect(() => {
    if (isSuccess && rounds) {
      const activeRound = rounds.find((round) => !round.isCompleted)
      params.setActiveRound(activeRound)

      if (activeRound && activeRound?.totalSeconds !== 0) {
        params.setSecondsLeft(activeRound.totalSeconds)
      }
    }
  }, [isSuccess, rounds])

  return {
    session,
    isSessionLoading,
    isSuccess,
  }
}
