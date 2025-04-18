import Button from '@/shared/components/button/Button'
import styles from './pomodoro-rounds.module.scss'
import { ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type PomodoroRoundProps = {
  rounds: number
  activeRound: number
  nextRoundHandler: () => void
  prevRoundHandler: () => void
  isTablet?: boolean
}

function PomodoroRounds(props: PomodoroRoundProps) {
  const isCanPrevRound = props.activeRound !== 1

  const isCanNextRound = props.activeRound <= props.rounds

  const rounds: ReactNode[] = []

  for (let i = 1; i <= props.rounds; i++) {
    rounds.push(
      <div
        className={
          i < props.activeRound ? styles['round__completed'] : styles.round
        }
        key={i}
      ></div>,
    )
  }

  return (
    <div className={styles[props.isTablet ? 'pomodoro-mb' : 'pomodoro']}>
      <Button
        icon={ArrowLeft}
        disabled={!isCanPrevRound}
        onClick={() => (isCanPrevRound ? props.prevRoundHandler() : false)}
      >
        {!props.isTablet ? 'Previos' : undefined}
      </Button>
      <div className={styles.rounds}>{rounds}</div>
      <Button
        icon={ArrowRight}
        disabled={!isCanNextRound}
        onClick={() => (isCanNextRound ? props.nextRoundHandler() : false)}
      >
        {!props.isTablet ? 'next' : undefined}
      </Button>
    </div>
  )
}

export default PomodoroRounds
