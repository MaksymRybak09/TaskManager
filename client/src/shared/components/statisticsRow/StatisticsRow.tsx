import StatisticsCell from '../statisticsCell/StatisticsCell'
import styles from './stattistics-row.module.scss'

type StatisticsRowProps = {
  data: {
    label: string
    value: string
  }[]
}

function StatisticsRow({ data }: StatisticsRowProps) {
  return (
    <div className={styles.row}>
      {data.map((elem, id) => (
        <StatisticsCell key={id} label={elem.label} value={elem.value} />
      ))}
    </div>
  )
}

export default StatisticsRow
