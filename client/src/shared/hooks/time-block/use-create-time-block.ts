import { timeBlockService } from '@/shared/services/time-block/time-block.service'
import type { TimeBlockFormState } from '@/shared/types/time-block.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateTimeBlock = () => {
  const queryClient = useQueryClient()

  const { mutate: createTimeBlock, isPending: isCreateTimeBlockPending } =
    useMutation({
      mutationKey: ['create time-block'],
      mutationFn: (data: TimeBlockFormState) =>
        timeBlockService.createTimeBlock(data),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['time-blocks'],
        })
      },
    })

  return {
    createTimeBlock,
    isCreateTimeBlockPending,
  }
}
