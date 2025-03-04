'use client'

import { TimeBlock } from '@/entity/TimeBlock'
import { DeleteTimeBlockButton } from '@/features/DeleteTimeBlockButton'
import { UpdateTimeBlockButton } from '@/features/UpdateTimeBlockButton'
import { calcHoursLeft } from '@/shared/helpers/calc-hours-left'
import { useTimeBlockDND } from '@/shared/hooks/time-block/use-time-block-dnd'
import { useTimeBlocks } from '@/shared/hooks/time-block/use-time-blocks'
import { closestCenter, DndContext } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import styles from './time-block-list.module.scss'

function TimeBlockList() {
  const { items, setItems, isLoading } = useTimeBlocks()
  const { handleDragEnd, sensors } = useTimeBlockDND(items, setItems)
  const hoursLeft = calcHoursLeft(items)

  if (isLoading) return 'Loading'

  return (
    <div className={styles['time-block-list']}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div>
          <SortableContext
            items={items || []}
            strategy={verticalListSortingStrategy}
          >
            {items?.length ? (
              items.map((item) => (
                <TimeBlock
                  key={item.id}
                  item={item}
                  actions={[
                    <UpdateTimeBlockButton item={item} key={item.id} />,
                    <DeleteTimeBlockButton item={item} key={item.name} />,
                  ]}
                />
              ))
            ) : (
              <div>You have no items</div>
            )}
          </SortableContext>
        </div>
      </DndContext>
      <div>
        {hoursLeft > 0
          ? `${hoursLeft} left to sleep`
          : 'No hours left to sleep'}
      </div>
    </div>
  )
}

export default TimeBlockList
