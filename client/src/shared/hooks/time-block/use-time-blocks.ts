import { timeBlockService } from '@/shared/services/time-block/time-block.service'
import { ITimeBlock } from '@/shared/types/time-block.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const useTimeBlocks = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['time-blocks'],
    queryFn: () => timeBlockService.getTimeBlocks(),
  })

  const [items, setItems] = useState<ITimeBlock[] | undefined>(data)

  useEffect(() => {
    setItems(data)
  }, [data])

  return { items, setItems, isLoading }
}
