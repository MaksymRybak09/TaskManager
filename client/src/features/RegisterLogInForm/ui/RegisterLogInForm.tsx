import Button from '@/shared/components/button/Button'
import Field from '@/shared/components/field/Field'
import Heading from '@/shared/components/heading/Heading'
import { useRegisterLogInForm } from '../hooks/use-register-login-form.hook'
import styles from './register-login-form.module.scss'

function RegisterLogInForm() {
  const { register, errors, onSubmit, setIsLogInForm } = useRegisterLogInForm()

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Heading title={'Authorisation'} />
      <div className={styles['form__section']}>
        <Field
          label="Email:"
          placeholder="Enter email"
          type="email"
          register={{
            ...register('email', { required: 'Email is required' }),
          }}
          error={errors['email']}
        />
        <Field
          label="Password:"
          placeholder="Enter password"
          type="password"
          register={{
            ...register('password', { required: 'Password is required' }),
          }}
          error={errors['password']}
        />
      </div>
      <div className={styles['form__section-buttons']}>
        <Button type="submit" onClick={() => setIsLogInForm(true)}>
          Log In
        </Button>
        <Button type="submit" onClick={() => setIsLogInForm(false)}>
          Register
        </Button>
      </div>
    </form>
  )
}

export default RegisterLogInForm
