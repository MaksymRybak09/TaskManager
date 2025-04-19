'use client'

import Button from '@/shared/components/button/Button'
import Field from '@/shared/components/field/Field'
import Heading from '@/shared/components/heading/Heading'
import Linking from '@/shared/components/link/Linking'
import { authService } from '@/shared/services/auth/auth.service'
import { logInFormSchema } from '../config/forms.scema'
import { useRegisterLogInForm } from '../hooks/use-register-login-form'
import styles from './register-login-form.module.scss'

function LogInForm() {
  const { register, errors, onSubmit } = useRegisterLogInForm(
    authService.logIn,
    logInFormSchema,
  )

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles['form__heading']}>
        <Heading size="4">Log in</Heading>
      </div>
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
      </div>
      <div className={styles['form__section']}>
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
      <div className={styles['form__section']}>
        <div className={styles['form__paragraph']}>
          {`Don't have an account `}
          <Linking href={'/register'}>Register</Linking>
        </div>
        <Button type="submit">Log In</Button>
      </div>
    </form>
  )
}

export default LogInForm
