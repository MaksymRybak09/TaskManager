import TransparentButton from '@/shared/components/transparentButton/TransparentButton'
import { addTask } from '@/shared/helpers/add-task'
import type { ITask } from '@/shared/types/task.types'
import { Dispatch, SetStateAction } from 'react'

type ListAddRowInputProps = {
  filterDate?: string
  setItems: Dispatch<SetStateAction<ITask[] | undefined>>
}

function NewTaskButton(props: ListAddRowInputProps) {
  return (
    <TransparentButton
      onClick={() => addTask(props.setItems, props.filterDate)}
    >
      New task
    </TransparentButton>
  )
}

export default NewTaskButton
