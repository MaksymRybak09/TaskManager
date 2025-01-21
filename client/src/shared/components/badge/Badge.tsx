import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './badge.module.scss'

type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

function Badge({ children, ...props }: BadgeProps) {
  return (
    <button {...props} className={styles.badge}>
      {children}
    </button>
  )
}

export default Badge
