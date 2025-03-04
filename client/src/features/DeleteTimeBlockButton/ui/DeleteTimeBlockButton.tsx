import TransparentButton from '@/shared/components/transparentButton/TransparentButton'
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
    <TransparentButton onClick={() => deleteTimeBlock()}>
      {isDeleteTimeBlockPending ? 'deleting...' : 'Delete'}
    </TransparentButton>
  )
}

export default DeleteTimeBlockButton
