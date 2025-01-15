import { ReactNode } from 'react'
import styles from './form-layout.module.scss'

type FormLayoutProps = {
  children: ReactNode
}

function FormLayout(props: FormLayoutProps) {
  return <div className={styles['form-layout']}>{props.children}</div>
}

export default FormLayout
