import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './button.module.scss'
import { LucideIcon } from 'lucide-react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'transparent' | 'border' | 'filled'
  icon?: LucideIcon
}

function Button({
  children,
  variant = 'filled',
  icon: Icon,
  ...props
}: ButtonProps) {
  const classes = `${styles.button} ${styles[`${variant}-button`]}`

  return (
    <button className={classes} {...props}>
      {Icon && <Icon className={styles.icon} />}
      {children}
    </button>
  )
}

export default Button
