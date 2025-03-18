import { ReactNode } from 'react'
import styles from './heading.module.scss'

type HeadingProps = {
  children: ReactNode
  size: '1' | '2' | '3' | '4' | '5' | '6'
}

function Heading(props: HeadingProps) {
  return <h1 className={styles[`headline${props.size}`]}>{props.children}</h1>
}

export default Heading
