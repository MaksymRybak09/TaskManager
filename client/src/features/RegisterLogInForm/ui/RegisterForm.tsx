'use client'

import Button from '@/shared/components/button/Button'
import Field from '@/shared/components/field/Field'
import Heading from '@/shared/components/heading/Heading'
import Linking from '@/shared/components/link/linking'
import { authService } from '@/shared/services/auth/auth.service'
import { registerFormSchema } from '../config/forms.scema'
import { useRegisterLogInForm } from '../hooks/use-register-login-form'
import styles from './register-login-form.module.scss'

function RegisterForm() {
  const { register, errors, onSubmit } = useRegisterLogInForm(
    authService.register,
    registerFormSchema,
  )

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Heading size="4">Register</Heading>
      <div className={styles['form__section']}>
        <Field
          label="Name:"
          placeholder="Enter namel"
          register={{
            ...register('name'),
          }}
          error={errors['name']}
        />
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
        Already have an account <Linking href={'/log-in'}>Log in</Linking>
      </p>
      <Button type="submit">Register</Button>
    </form>
  )
}

export default RegisterForm
