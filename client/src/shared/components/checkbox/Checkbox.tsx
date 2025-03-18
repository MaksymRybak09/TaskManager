import styles from './checkbox.module.scss'

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

function Checkbox({ ...props }: CheckboxProps) {
  return <input type="checkbox" className={styles.checkbox} {...props} />
}

export default Checkbox
