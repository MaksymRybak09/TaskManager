import { timeBlockService } from '@/shared/services/time-block/time-block.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteTimeBlock = (itemID: string) => {
  const queryClient = useQueryClient()

  const { mutate: deleteTimeBlock, isPending: isDeleteTimeBlockPending } =
    useMutation({
      mutationKey: ['delete time-block', itemID],
      mutationFn: () => timeBlockService.deleteTimeBlock(itemID),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['time-blocks'],
        })
      },
    })

  return {
    deleteTimeBlock,
    isDeleteTimeBlockPending,
  }
}
