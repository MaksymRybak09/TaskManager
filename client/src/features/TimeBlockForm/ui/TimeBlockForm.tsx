import Button from '@/shared/components/button/Button'
import Field from '@/shared/components/field/Field'
import { Controller } from 'react-hook-form'
import { useTimeBlockForm } from '../hooks/use-time-block-form'
import styles from './time-block-form.module.scss'
import Select from '@/shared/components/select/Select'
import {
  TIME_BLOCK_COLORS,
  TIME_BLOCK_DEFAUL_COLOR,
} from '@/shared/constants/time-block-colors'
import { getColor } from '@/shared/helpers/get-color'

function TimeBlockForm() {
  const {
    register,
    control,
    errors,
    onSubmit,
    existsID,
    isCreateTimeBlockPending,
  } = useTimeBlockForm()

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Field
        label="Name:"
        placeholder="Enter name"
        register={{
          ...register('name'),
        }}
        error={errors['name']}
      />
      <Field
        label="Duration (min):"
        placeholder="Enter duration"
        type="number"
        register={{
          ...register('duration', { valueAsNumber: true }),
        }}
        error={errors['duration']}
      />
      <Controller
        control={control}
        name="color"
        render={({ field: { value, onChange } }) => (
          <Select
            value={
              value
                ? getColor(TIME_BLOCK_COLORS, value)
                : TIME_BLOCK_DEFAUL_COLOR.label
            }
            data={TIME_BLOCK_COLORS}
            onChange={onChange}
          />
        )}
      />
      <Button type="submit" disabled={isCreateTimeBlockPending}>
        {existsID ? 'Update' : 'Create'}
      </Button>
    </form>
  )
}

export default TimeBlockForm
