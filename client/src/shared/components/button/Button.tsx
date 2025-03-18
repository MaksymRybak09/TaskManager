import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'transparent' | 'border' | 'filled'
}

function Button({ children, variant = 'filled', ...props }: ButtonProps) {
  const classes = `${styles.button} ${styles[`${variant}-button`]}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
