import styles from './heading.module.scss'

type HeadingProps = {
  title: string
}

function Heading(props: HeadingProps) {
  return <h1 className={styles.title}>{props.title}</h1>
}

export default Heading
