import { useOutside } from '@/shared/hooks/general/use-outside'
import { useState } from 'react'

export const useDatePicker = (onChange: (value: string) => void) => {
  const [selected, setSelected] = useState<Date>()
  const { isShow, setIsShow, ref } = useOutside(false)

  const handleDaySelect = (date: Date | undefined) => {
    if (date) {
      const ISODate = date.toISOString()
      setSelected(date)
      onChange(ISODate)
      setIsShow(false)
    } else {
      onChange('')
    }
  }

  return { selected, isShow, setIsShow, ref, handleDaySelect }
}
