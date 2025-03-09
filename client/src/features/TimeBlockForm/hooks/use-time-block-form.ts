import { TIME_BLOCK_DEFAUL_COLOR } from '@/shared/constants/time-block-colors'
import { useCreateTimeBlock } from '@/shared/hooks/time-block/use-create-time-block'
import { useUpdateTimeBlock } from '@/shared/hooks/time-block/use-update-time-block'
import type { TimeBlockFormState } from '@/shared/types/time-block.types'
import { useFormContext } from 'react-hook-form'

export const useTimeBlockForm = () => {
  const {
    register,
    control,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useFormContext<TimeBlockFormState>()

  const existsID = watch('id')

  const { createTimeBlock, isCreateTimeBlockPending } = useCreateTimeBlock()
  const { updateTimeBlock } = useUpdateTimeBlock()

  const onSubmit = handleSubmit((data) => {
    const { id, color, ...rest } = data
    const dto = { ...rest, color: color || undefined }

    if (id) {
      updateTimeBlock({
        id,
        data: dto,
      })
    } else {
      createTimeBlock(dto)
    }

    reset({
      id: undefined,
      name: '',
      color: TIME_BLOCK_DEFAUL_COLOR.value,
      duration: 10,
      order: 1,
    })
  })

  return {
    register,
    control,
    errors,
    onSubmit,
    existsID,
    isCreateTimeBlockPending,
  }
}
