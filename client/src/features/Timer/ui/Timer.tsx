'use client'

import { PomodoroRounds } from '@/entity/PomodoroRounds'
import Button from '@/shared/components/button/Button'
import TransparentButton from '@/shared/components/transparentButton/TransparentButton'
import { formatTime } from '@/shared/helpers/format-time'
import { useTimer } from '../hooks/use-timer.hook'
import styles from './timer.module.scss'

function Timer() {
  const {
    session,
    isSessionLoading,
    createSession,
    isCreateSessionPending,
    deleteSession,
    isDeleteSessionPending,
    secondsLeft,
    rounds,
    activeRound,
    isUpdateRoundPending,
    nextRoundHandler,
    prevRoundHandler,
    pauseHandler,
    playHandler,
    isRunning,
    setIsRunning,
  } = useTimer()

  return (
    <div className={styles.timer}>
      {!isSessionLoading && (
        <div className={styles.time}>{formatTime(secondsLeft)}</div>
      )}
      {isSessionLoading ? (
        <div>Loading...</div>
      ) : session ? (
        <>
          <PomodoroRounds
            rounds={rounds}
            activeRound={activeRound}
            nextRoundHandler={nextRoundHandler}
            prevRoundHandler={prevRoundHandler}
          />
          <div className={styles['timer__buttons']}>
            <Button
              onClick={isRunning ? pauseHandler : playHandler}
              disabled={isUpdateRoundPending}
            >
              {isRunning ? 'Pause' : 'Play'}
            </Button>
            <TransparentButton
              onClick={() => {
                setIsRunning(true)
                deleteSession(session?.id ?? '')
              }}
              disabled={isDeleteSessionPending}
            >
              Delete session
            </TransparentButton>
          </div>
        </>
      ) : (
        <Button
          onClick={() => createSession()}
          disabled={isCreateSessionPending}
        >
          Create session
        </Button>
      )}
    </div>
  )
}

export default Timer
