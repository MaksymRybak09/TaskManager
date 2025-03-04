'use client'

import TransparentButton from '@/shared/components/transparentButton/TransparentButton'
import { useDeleteTask } from '@/shared/hooks/tasks/use-delete-task'
import type { ITask } from '@/shared/types/task.types'
import { Dispatch, SetStateAction } from 'react'

type DeleteTaskButton = {
  item: ITask
  setItems: Dispatch<SetStateAction<ITask[] | undefined>>
}

function DeleteTaskButton(props: DeleteTaskButton) {
  const { deleteTask, isDeletePending } = useDeleteTask()

  return (
    <TransparentButton
      onClick={() =>
        props.item.id
          ? deleteTask(props.item.id)
          : props.setItems((prev) => prev?.slice(0, -1))
      }
    >
      {isDeletePending ? 'Loading...' : 'Delete task'}
    </TransparentButton>
  )
}

export default DeleteTaskButton
