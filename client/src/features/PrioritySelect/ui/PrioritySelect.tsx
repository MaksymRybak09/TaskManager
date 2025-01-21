import Badge from '@/shared/components/badge/Badge'
import { PriorityOption } from '@/shared/types/task.types'
import { usePrioritySelect } from '../hooks/use-priority-select.hook'
import styles from './priority-select.module.scss'

type PrioritySelectProps = {
  data: PriorityOption[]
  onChange: (value: string) => void
  value: string
  isColorselect?: boolean
}

function PrioritySelect(props: PrioritySelectProps) {
  const { ref, isShow, setIsShow, showPrioritiesList, priority } =
    usePrioritySelect(props.data, props.value)

  return (
    <div ref={ref} className={styles.parent}>
      {priority ? (
        <Badge onClick={showPrioritiesList}>{priority}</Badge>
      ) : (
        <Badge onClick={showPrioritiesList}>Click for select</Badge>
      )}
      {isShow && (
        <div className={styles.child}>
          {props.data.map((item) => (
            <Badge
              key={item.value}
              onClick={(event) => {
                event.preventDefault()
                props.onChange(item.value)
                setIsShow(false)
              }}
            >
              {item.label}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}

export default PrioritySelect
