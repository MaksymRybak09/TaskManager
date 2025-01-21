import { forwardRef, InputHTMLAttributes } from 'react'
import styles from './transparent-field.module.scss'

type TransparentFieldProps = InputHTMLAttributes<HTMLInputElement>

export const TransparentField = forwardRef<
  HTMLInputElement,
  TransparentFieldProps
>(({ ...rest }, ref) => {
  return <input className={styles['transparent-field']} ref={ref} {...rest} />
})

TransparentField.displayName = 'TransparentField'
