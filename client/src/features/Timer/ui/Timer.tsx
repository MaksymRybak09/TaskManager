'use client'

import { PomodoroRounds } from '@/entity/PomodoroRounds'
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
      <div className={styles['create-timer-button']}>
        <Button onClick={() => createTimer()} disabled={isCreateTimerPending}>
          Create timer
        </Button>
      </div>
    )
  }

  if (timer?.isCompleted) {
    return (
      <div className={styles['refresh-timer-block']}>
        <div className={styles['refresh-timer-title']}>Timer has ended</div>
        <Button
          onClick={() => {
            deleteTimer(timer?.id ?? '')
            createTimer()
          }}
          disabled={isCreateTimerPending}
        >
          Refresh timer
        </Button>
      </div>
    )
  }

  return (
    <div className={styles.timer}>
      <div>
        <div className={styles.time}>{formatTime(secondsLeftState)}</div>
        <div className={styles.badge}>{isBreakTime ? 'Rest' : 'Work'}</div>
      </div>
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
