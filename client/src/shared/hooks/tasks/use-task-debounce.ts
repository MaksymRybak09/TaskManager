import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import { UseFormWatch } from 'react-hook-form'
import { TaskFormState } from '../../types/task.types'
import { useCreateTask } from './use-create-task'
import { useUpdateTask } from './use-update-task'

interface IUseTaskdebounce {
  watch: UseFormWatch<TaskFormState>
  itemID: string
}

export const useTaskDebounce = (props: IUseTaskdebounce) => {
  const { createTask } = useCreateTask()
  const { updateTask } = useUpdateTask()

  const debouncedCreateTask = useCallback(
    debounce((formData: TaskFormState) => {
      createTask(formData)
    }, 444),
    [],
  )

  const debouncedUpdateTask = useCallback(
    debounce((formData: TaskFormState) => {
      updateTask({ id: props.itemID, data: formData })
    }, 444),
    [],
  )

  useEffect(() => {
    const { unsubscribe } = props.watch((formData) => {
      if (props.itemID !== 'for-create') {
        debouncedUpdateTask({
          ...formData,
          priority: formData.priority || undefined,
        })
      } else {
        debouncedCreateTask({
          ...formData,
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [props.watch(), debouncedCreateTask, debouncedUpdateTask])
}
