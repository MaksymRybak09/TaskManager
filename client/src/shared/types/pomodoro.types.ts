export interface IPomodoroTimer {
  id: string
  createdAt?: string
  updatedAt?: string
  secondsLeft: number
  rounds: number
  currentRound: number
  isWorkingTime: boolean
  isCompleted?: boolean
}

export type PomodoroTimerState = Partial<
  Omit<IPomodoroTimer, 'id' | 'createdAt' | 'updatedAt'>
>
