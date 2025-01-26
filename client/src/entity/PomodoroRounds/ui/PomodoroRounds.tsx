import Button from '@/shared/components/button/Button'
import { IPomodoroRound } from '@/shared/types/pomodoro.types'
import styles from './pomodoro-rounds.module.scss'

type PomodoroRoundProps = {
  rounds: IPomodoroRound[] | undefined
  nextRoundHandler: () => void
  prevRoundHandler: () => void
  activeRound: IPomodoroRound | undefined
}

function PomodoroRounds(props: PomodoroRoundProps) {
  const isCanPrevRound = props.rounds
    ? props.rounds.some((round) => round.isCompleted)
    : false

  const isCanNextRound = props.rounds
    ? !props.rounds[props.rounds.length - 1].isCompleted
    : false

  return (
    <div className={styles['pomodoro']}>
      <Button
        disabled={!isCanPrevRound}
        onClick={() => (isCanPrevRound ? props.prevRoundHandler() : false)}
      >
        Previos
      </Button>
      <div className={styles.rounds}>
        {props.rounds &&
          props.rounds.map((round, index) => (
            <div
              className={
                round.isCompleted ? styles['round__completed'] : styles.round
              }
              key={index}
            ></div>
          ))}
      </div>
      <Button
        disabled={!isCanNextRound}
        onClick={() => (isCanNextRound ? props.nextRoundHandler() : false)}
      >
        Next
      </Button>
    </div>
  )
}

export default PomodoroRounds
