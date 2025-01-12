export interface IPomodoroRound {
  id: string
  createdAt?: string
  updatedAt?: string
  isCompleted?: boolean
  totalSeconds: number
}

export interface IPomodoroSession {
  id: string
  createdAt?: string
  updatedAt?: string
  isCompleted?: boolean
  rounds?: IPomodoroRound[]
}

export type PomodoroSessionState = Partial<
  Omit<IPomodoroSession, 'id' | 'createdAt' | 'updatedAt'>
>

export type PomodoroRoundState = Partial<
  Omit<IPomodoroRound, 'id' | 'createdAt' | 'updatedAt'>
>
