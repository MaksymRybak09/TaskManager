'use client'

import { calcHeight } from '@/shared/helpers/calc-height'
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
          minHeight: `${calcHeight(props.item.duration)}px`,
        }}
      >
        <div
          {...attributes}
          {...listeners}
          className={timeBlockStyles['drag-handle']}
        >
          🟰
        </div>
        <div className={timeBlockStyles['name']}>{props.item.name}</div>
        <div className={timeBlockStyles['duration']}>{props.item.duration}</div>
        <div className={timeBlockStyles['actions']}>{props.actions}</div>
      </div>
    </div>
  )
}

export default TimeBlock
