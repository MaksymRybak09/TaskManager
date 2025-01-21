import { taskService } from '@/shared/services/task/task.service'
import { ITask } from '@/shared/types/task.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const useTasks = () => {
  const { data } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => taskService.getTasks(),
  })

  const [items, setItems] = useState<ITask[] | undefined>(data)

  useEffect(() => {
    setItems(data)
  }, [data])

  return { items, setItems }
}
