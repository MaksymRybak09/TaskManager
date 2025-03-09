'use client'

import { useTimeBlockSortable } from '@/shared/hooks/time-block/use-time-block-sortable'
import type { ITimeBlock } from '@/shared/types/time-block.types'
import { ReactNode } from 'react'
import timeBlockStyles from './time-block.module.scss'

type TimeBlockProps = {
  item: ITimeBlock
  actions: ReactNode[]
}

function TimeBlock(props: TimeBlockProps) {
  const { attributes, listeners, setNodeRef, styles } = useTimeBlockSortable(
    props.item.id,
  )

  return (
    <div ref={setNodeRef} style={styles} aria-describedby="time-block">
      <div
        className={timeBlockStyles['time-block']}
        style={{
          backgroundColor: props.item.color,
          height: `${props.item.duration < 80 ? 80 : props.item.duration}px`,
        }}
      >
        <div
          {...attributes}
          {...listeners}
          className={timeBlockStyles['drag-handle']}
        >
          🟰 Drag me
        </div>
        <div>
          {props.item.name}
          <p>{props.item.duration}</p>
        </div>
        <div>{props.actions}</div>
      </div>
    </div>
  )
}

export default TimeBlock
