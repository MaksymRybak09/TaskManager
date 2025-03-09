import { DatePicker } from '@/features/DatePicker'
import { DeleteTaskButton } from '@/features/DeleteTaskButton'
import Checkbox from '@/shared/components/checkbox/Checkbox'
import { TransparentField } from '@/shared/components/transparentField/TransparentField'
import TaskRowLayout from '@/shared/layout/TaskRowLayout/TaskRowLayout'
import type { ITask } from '@/shared/types/task.types'
import { Dispatch, SetStateAction } from 'react'
import { Controller } from 'react-hook-form'
import { useTaskRow } from '../hooks/use-task-row.hook'
import Select from '@/shared/components/select/Select'
import { getPriority } from '@/shared/helpers/get-priority'

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

  return (
    <TaskRowLayout
      taskInput={[
        <Controller
          key="task-checkbox"
          control={control}
          name="isCompleted"
          render={({ field: { value, onChange } }) => (
            <Checkbox onChange={onChange} checked={value} />
          )}
        />,
        <TransparentField key="task-input" {...register('name')} />,
      ]}
      datePicker={
        <Controller
          control={control}
          name="createdAt"
          render={({ field: { value, onChange } }) => (
            <DatePicker onChange={onChange} value={value || ''} />
          )}
        />
      }
      prioritySelect={
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
      }
      deleteTaskButton={
        <DeleteTaskButton item={props.item} setItems={props.setItems} />
      }
    />
  )
}

export default TaskRow
