import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './linking.module.scss'

type LinkingProps = {
  children: ReactNode
  href: string
}

function Linking(props: LinkingProps) {
  return (
    <Link className={styles.linking} href={props.href}>
      {props.children}
    </Link>
  )
}

export default Linking
