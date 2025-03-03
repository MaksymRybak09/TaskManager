import styles from './statistics-cell.module.scss'

type StatisticsCellProps = {
  label: string
  value: number
}

function StatisticsCell(props: StatisticsCellProps) {
  return (
    <div className={styles.cell}>
      <div className={styles['cell__value']}>{props.value}</div>
      <div className={styles['cell__title']}>{props.label}</div>
    </div>
  )
}

export default StatisticsCell
