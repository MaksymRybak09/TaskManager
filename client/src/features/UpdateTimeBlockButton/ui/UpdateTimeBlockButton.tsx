import Button from '@/shared/components/button/Button'
import type {
  ITimeBlock,
  TimeBlockFormState,
} from '@/shared/types/time-block.types'
import { useFormContext } from 'react-hook-form'

type UpdateTimeBlockButtonProps = {
  item: ITimeBlock
}

function UpdateTimeBlockButton(props: UpdateTimeBlockButtonProps) {
  const { reset } = useFormContext<TimeBlockFormState>()

  return (
    <Button
      variant="transparent"
      onClick={() =>
        reset({
          id: props.item.id,
          name: props.item.name,
          color: props.item.color,
          duration: props.item.duration,
          order: props.item.order,
        })
      }
    >
      Update
    </Button>
  )
}

export default UpdateTimeBlockButton
