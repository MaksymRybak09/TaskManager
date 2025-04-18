'use client'

import { PomodoroRounds } from '@/entity/PomodoroRounds'
import Button from '@/shared/components/button/Button'
import Loader from '@/shared/components/loader/Loader'
import { formatTime } from '@/shared/helpers/format-time'
import { useBreakPoints } from '@/shared/hooks/general/use-break-points'
import { Pause, Play, Plus, RefreshCcw, Trash } from 'lucide-react'
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
  const { isTablet } = useBreakPoints()

  if (isTimerPending) return <Loader />

  if (!timer) {
    return (
      <div className={styles['create-timer-button']}>
        <Button
          icon={Plus}
          onClick={() => createTimer()}
          disabled={isCreateTimerPending}
        >
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
          icon={RefreshCcw}
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
    <div className={styles[isTablet ? 'timer-mb' : 'timer']}>
      <div>
        <div className={styles.time}>{formatTime(secondsLeftState)}</div>
        <div className={styles.badge}>{isBreakTime ? 'Rest' : 'Work'}</div>
      </div>
      <PomodoroRounds
        rounds={timer.rounds}
        activeRound={timer.currentRound}
        nextRoundHandler={nextRoundHandler}
        prevRoundHandler={prevRoundHandler}
        isTablet={isTablet}
      />
      <div className={styles['timer__buttons']}>
        <Button
          icon={isRunning ? Pause : Play}
          onClick={isRunning ? pauseHandler : playHandler}
        >
          {!isTablet ? (isRunning ? 'Pause' : 'Play') : undefined}
        </Button>
        <Button
          icon={Trash}
          variant="transparent"
          onClick={() => deleteTimer(timer?.id ?? '')}
          disabled={isDeleteTimerPending}
        >
          {!isTablet ? 'Delete timer' : undefined}
        </Button>
      </div>
    </div>
  )
}

export default Timer
