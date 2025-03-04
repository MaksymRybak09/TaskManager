'use client'

import TransparentButton from '@/shared/components/transparentButton/TransparentButton'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { DayPicker } from 'react-day-picker'
import { useDatePicker } from '../hooks/use-date-picker.hook'
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
      <TransparentButton onClick={() => setIsShow(!isShow)}>
        {props.value ? dayjs(props.value).format('LL') : 'Click for select'}
      </TransparentButton>
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
