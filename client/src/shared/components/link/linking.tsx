import { ReactNode } from 'react'
import styles from './linking.module.scss'
import Link from 'next/link'

type LinkProps = {
  children: ReactNode
  href: string
}

function Linking(props: LinkProps) {
  return (
    <Link className={styles.linking} href={props.href}>
      {props.children}
    </Link>
  )
}

export default Linking
