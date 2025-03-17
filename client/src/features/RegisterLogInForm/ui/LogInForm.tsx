'use client'

import Button from '@/shared/components/button/Button'
import Field from '@/shared/components/field/Field'
import Heading from '@/shared/components/heading/Heading'
import { authService } from '@/shared/services/auth/auth.service'
import Link from 'next/link'
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
      <Heading title={'Log in'} />
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
      <p>
        {`Don't have an account `}
        <Link href={'/register'}>Register</Link>
      </p>
      <Button type="submit">Log In</Button>
    </form>
  )
}

export default LogInForm
