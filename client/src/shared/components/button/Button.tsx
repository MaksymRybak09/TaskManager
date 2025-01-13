import { ReactNode } from 'react'
import styles from './button.module.scss'

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
  onClick: () => void
}

function Button(props: ButtonProps) {
  return (
    <button className={styles.button} type={props.type ?? 'button'}>
      {props.children}
    </button>
  )
}

export default Button
