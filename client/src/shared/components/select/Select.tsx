import Badge from '@/shared/components/badge/Badge'
import { useOutside } from '@/shared/hooks/general/use-outside'
import type { SelectOptions } from '@/shared/types/select.types'
import Button from '../button/Button'
import styles from './select.module.scss'

type SelectProps = {
  value: string
  data: SelectOptions
  onChange: (value: string) => void
}

function Select(props: SelectProps) {
  const { ref, isShow, setIsShow } = useOutside(false)

  const showPrioritiesList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsShow(!isShow)
  }

  return (
    <div ref={ref} className={styles.parent}>
      <Badge onClick={showPrioritiesList}>{props.value}</Badge>
      {isShow && (
        <div className={styles.child}>
          {props.data.map((item) => (
            <Button
              key={item.label}
              onClick={(event) => {
                event.preventDefault()
                props.onChange(item.value)
                setIsShow(false)
              }}
              variant="transparent"
            >
              {item.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
