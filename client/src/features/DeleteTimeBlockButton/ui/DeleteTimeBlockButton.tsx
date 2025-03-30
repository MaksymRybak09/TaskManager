import Button from '@/shared/components/button/Button'
import { useDeleteTimeBlock } from '@/shared/hooks/time-block/use-delete-time-block'
import type { ITimeBlock } from '@/shared/types/time-block.types'

type DeleteTimeBlockButtonProps = {
  item: ITimeBlock
}

function DeleteTimeBlockButton(props: DeleteTimeBlockButtonProps) {
  const { deleteTimeBlock, isDeleteTimeBlockPending } = useDeleteTimeBlock(
    props.item.id,
  )

  return (
    <Button variant="transparent" onClick={() => deleteTimeBlock()}>
      {isDeleteTimeBlockPending ? 'deleting...' : 'Delete'}
    </Button>
  )
}

export default DeleteTimeBlockButton
