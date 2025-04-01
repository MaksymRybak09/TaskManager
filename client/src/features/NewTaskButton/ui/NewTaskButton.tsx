import Button from '@/shared/components/button/Button'
import { addTask } from '@/shared/helpers/add-task'
import type { ITask } from '@/shared/types/task.types'
import { Plus } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

type ListAddRowInputProps = {
  filterDate?: string
  setItems: Dispatch<SetStateAction<ITask[] | undefined>>
}

function NewTaskButton(props: ListAddRowInputProps) {
  return (
    <Button
      icon={Plus}
      onClick={() => addTask(props.setItems, props.filterDate)}
    >
      New task
    </Button>
  )
}

export default NewTaskButton
