'use client'

import Button from '@/shared/components/button/Button'
import { useDeleteTask } from '@/shared/hooks/tasks/use-delete-task'
import type { ITask } from '@/shared/types/task.types'
import { Dispatch, SetStateAction } from 'react'
import { Trash } from 'lucide-react'

type DeleteTaskButton = {
  item: ITask
  setItems: Dispatch<SetStateAction<ITask[] | undefined>>
}

function DeleteTaskButton(props: DeleteTaskButton) {
  const { deleteTask, isDeletePending } = useDeleteTask()

  return (
    <Button
      icon={Trash}
      variant="transparent"
      onClick={() =>
        props.item.id
          ? deleteTask(props.item.id)
          : props.setItems((prev) => prev?.slice(0, -1))
      }
    >
      {isDeletePending ? 'Loading...' : 'Delete task'}
    </Button>
  )
}

export default DeleteTaskButton
