'use client'

import Button from '@/shared/components/button/Button'
import Field from '@/shared/components/field/Field'
import Heading from '@/shared/components/heading/Heading'
import { authService } from '@/shared/services/auth/auth.service'
import { useRegisterLogInForm } from '../hooks/use-register-login-form'
import styles from './register-login-form.module.scss'

function RegisterForm() {
  const { register, errors, onSubmit } = useRegisterLogInForm(
    authService.register,
    'Successfuly registered!',
  )

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
      <Button type="submit">Register</Button>
    </form>
  )
}

export default RegisterForm
