'use client'

import Button from '@/shared/components/button/Button'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { DayPicker } from 'react-day-picker'
import { useDatePicker } from '../hooks/use-date-picker'
import styles from './date-picker.module.scss'

dayjs.extend(localizedFormat)

type DatePickerProps = {
  onChange: (value: string) => void
  value: string
}

function DatePicker(props: DatePickerProps) {
  const { selected, isShow, setIsShow, ref, handleDaySelect } = useDatePicker(
    props.onChange,
  )

  return (
    <div ref={ref} className={styles['date-picker']}>
      <Button variant="transparent" onClick={() => setIsShow(!isShow)}>
        {props.value ? dayjs(props.value).format('LL') : 'Click for select'}
      </Button>
      {isShow && (
        <div className={styles['calendar']}>
          <DayPicker
            startMonth={new Date(2025, 0)}
            autoFocus={isShow}
            mode="single"
            defaultMonth={selected}
            selected={selected}
            onSelect={handleDaySelect}
            weekStartsOn={1}
          />
        </div>
      )}
    </div>
  )
}

export default DatePicker
