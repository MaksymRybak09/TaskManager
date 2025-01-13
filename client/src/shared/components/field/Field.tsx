import { useId } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import styles from './field.module.scss'

type FieldProps = {
  label: string
  register: UseFormRegisterReturn
  error?: FieldError
  placeholder?: string
  type?: string
}

function Field(props: FieldProps) {
  const id = useId()
  return (
    <div className={styles.formField}>
      <label htmlFor={id} className={styles.label}>
        {props.label}
      </label>
      <input
        id={id}
        type={props.type ?? 'text'}
        placeholder={props.placeholder ?? ''}
        className={styles.input}
        {...props.register}
      />
      {props.error && <p className={styles.error}>{props.error.message}</p>}
    </div>
  )
}

export default Field
