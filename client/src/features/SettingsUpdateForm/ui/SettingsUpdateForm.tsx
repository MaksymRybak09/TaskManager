import Button from '@/shared/components/button/Button'
import Field from '@/shared/components/field/Field'
import { FieldError } from 'react-hook-form'
import { useSettingsUpdateForm } from '../hooks/use-settings-update-form'
import styles from './settings-update-form.module.scss'

function SettingsUpdateForm() {
  const { register, errors, handleSubmit, isPending, onSubmit } =
    useSettingsUpdateForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['form-column']}>
        <Field
          label="Name:"
          placeholder="Enter name"
          register={{
            ...register('name'),
          }}
          error={errors['name'] as FieldError}
        />
        <Field
          label="Email:"
          placeholder="Enter email"
          type="email"
          register={{
            ...register('email'),
          }}
          error={errors['email'] as FieldError}
        />
        <Field
          label="Password:"
          placeholder="Enter password"
          type="password"
          register={{
            ...register('password'),
          }}
          error={errors['password']}
        />
      </div>
      <div className={styles['form-column']}>
        <Field
          label="Work interval:"
          placeholder="Enter work interval"
          type="number"
          register={{
            ...register('workInterval', { valueAsNumber: true }),
          }}
          error={errors['workInterval']}
        />
        <Field
          label="Break interval:"
          placeholder="Enter break interval"
          type="number"
          register={{
            ...register('breakInterval', { valueAsNumber: true }),
          }}
          error={errors['breakInterval']}
        />
        <Field
          label="Intervals count:"
          placeholder="Enter intervals count"
          type="number"
          register={{
            ...register('intervalsCount', { valueAsNumber: true }),
          }}
          error={errors['intervalsCount']}
        />
      </div>
      <div>
        <Button type="submit" disabled={isPending}>
          Update
        </Button>
      </div>
    </form>
  )
}

export default SettingsUpdateForm
