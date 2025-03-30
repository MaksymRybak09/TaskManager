'use client'

import { PomodoroRounds } from '@/entity/PomodoroRounds'
import Badge from '@/shared/components/badge/Badge'
import Button from '@/shared/components/button/Button'
import { formatTime } from '@/shared/helpers/format-time'
import { useTimer } from '../hooks/use-timer'
import styles from './timer.module.scss'

function Timer() {
  const {
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
  } = useTimer()

  if (isTimerPending) return <div>Loading...</div>

  if (!timer) {
    return (
      <Button onClick={() => createTimer()} disabled={isCreateTimerPending}>
        Create timer
      </Button>
    )
  }

  if (timer?.isCompleted) {
    return (
      <>
        <div>Timer has ended</div>
        <Button
          onClick={() => {
            deleteTimer(timer?.id ?? '')
            createTimer()
          }}
          disabled={isCreateTimerPending}
        >
          Refresh timer
        </Button>
      </>
    )
  }

  return (
    <div className={styles.timer}>
      <div className={styles.time}>{formatTime(secondsLeftState)}</div>
      <Badge>{isBreakTime ? 'Rest' : 'Work'}</Badge>
      <PomodoroRounds
        rounds={timer.rounds}
        activeRound={timer.currentRound}
        nextRoundHandler={nextRoundHandler}
        prevRoundHandler={prevRoundHandler}
      />
      <div className={styles['timer__buttons']}>
        <Button onClick={isRunning ? pauseHandler : playHandler}>
          {isRunning ? 'Pause' : 'Play'}
        </Button>
        <Button
          variant="transparent"
          onClick={() => deleteTimer(timer?.id ?? '')}
          disabled={isDeleteTimerPending}
        >
          Delete timer
        </Button>
      </div>
    </div>
  )
}

export default Timer
