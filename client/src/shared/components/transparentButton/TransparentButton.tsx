import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './transparent-button.module.scss'

type TransparentButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

function TransparentButton({ children, ...props }: TransparentButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}

export default TransparentButton
