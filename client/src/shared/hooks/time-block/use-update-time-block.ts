import { timeBlockService } from '@/shared/services/time-block/time-block.service'
import { TimeBlockFormState } from '@/shared/types/time-block.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateTimeBlock = (key?: string) => {
  const queryClient = useQueryClient()

  const { mutate: updateTimeBlock } = useMutation({
    mutationKey: ['update time-block', key],
    mutationFn: ({ id, data }: { id: string; data: TimeBlockFormState }) =>
      timeBlockService.updateTimeBlock(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['time-blocks'],
      })
    },
  })

  return { updateTimeBlock }
}
