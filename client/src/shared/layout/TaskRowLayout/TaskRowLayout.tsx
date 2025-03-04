import styles from '@/shared/styles/task-table-layout.module.scss'
import type { ReactNode } from 'react'

type TaskRowLayoutProps = {
  taskInput: ReactNode[] | ReactNode
  datePicker: ReactNode[] | ReactNode
  prioritySelect: ReactNode[] | ReactNode
  deleteTaskButton: ReactNode[] | ReactNode
  rowStyles?: string
}

function TaskRowLayout(props: TaskRowLayoutProps) {
  return (
    <div className={`${styles['table__row']} ${props.rowStyles ?? ''}`}>
      <div className={styles['table__row--task-input']}>{props.taskInput}</div>
      <div className={styles['table__row--date-picker']}>
        {props.datePicker}
      </div>
      <div className={styles['table__row--priority-select']}>
        {props.prioritySelect}
      </div>
      <div className={styles['table__row--delete-task-button']}>
        {props.deleteTaskButton}
      </div>
    </div>
  )
}

export default TaskRowLayout
