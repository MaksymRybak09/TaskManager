import { useCreateTimeBlock } from '@/shared/hooks/time-block/use-create-time-block'
import { useUpdateTimeBlock } from '@/shared/hooks/time-block/use-update-time-block'
import { TimeBlockFormState } from '@/shared/types/time-block.types'
import { useEffect } from 'react'
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
  })

  useEffect(() => {
    reset({
      id: undefined,
      name: '',
      color: '#d0d0d0',
      duration: 0,
      order: 1,
    })
  }, [reset])

  return {
    register,
    control,
    errors,
    onSubmit,
    existsID,
    isCreateTimeBlockPending,
  }
}
