import { DatePicker } from '@/features/DatePicker'
import { DeleteTaskButton } from '@/features/DeleteTaskButton'
import Checkbox from '@/shared/components/checkbox/Checkbox'
import Select from '@/shared/components/select/Select'
import { TransparentField } from '@/shared/components/transparentField/TransparentField'
import { getPriority } from '@/shared/helpers/get-priority'
import { useBreakPoints } from '@/shared/hooks/general/use-break-points'
import type { ITask } from '@/shared/types/task.types'
import { Dispatch, SetStateAction } from 'react'
import { Controller } from 'react-hook-form'
import { useTaskRow } from '../hooks/use-task-row'
import styles from './task-row.module.scss'

type ListRowProps = {
  item: ITask
  setItems: Dispatch<SetStateAction<ITask[] | undefined>>
}

function TaskRow(props: ListRowProps) {
  const { register, control, priorityOptions } = useTaskRow(props.item, [
    'HIGH',
    'MEDIUM',
    'LOW',
  ])
  const { isTablet } = useBreakPoints()

  return (
    <div className={styles[isTablet ? 'row-mb' : 'row']}>
      <div className={styles['row--task-input']}>
        <Controller
          key="task-checkbox"
          control={control}
          name="isCompleted"
          render={({ field: { value, onChange } }) => (
            <Checkbox onChange={onChange} checked={value} />
          )}
        />
        <TransparentField key="task-input" {...register('name')} />
      </div>
      <div className={styles['row--date-picker']}>
        <Controller
          control={control}
          name="createdAt"
          render={({ field: { value, onChange } }) => (
            <DatePicker onChange={onChange} value={value || ''} />
          )}
        />
      </div>
      <div className={styles['row--priority-select']}>
        <Controller
          control={control}
          name="priority"
          render={({ field: { value, onChange } }) => (
            <Select
              value={getPriority(priorityOptions, value ?? 'LOW')}
              data={priorityOptions}
              onChange={onChange}
            />
          )}
        />
      </div>
      <div className={styles['row--delete-task-button']}>
        <DeleteTaskButton item={props.item} setItems={props.setItems} />
      </div>
    </div>
  )
}

export default TaskRow
