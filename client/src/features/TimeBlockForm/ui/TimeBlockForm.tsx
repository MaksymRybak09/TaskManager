'use client'

import { PrioritySelect } from '@/features/PrioritySelect'
import Button from '@/shared/components/button/Button'
import Field from '@/shared/components/field/Field'
import { Controller } from 'react-hook-form'
import { TIME_BLOCK_COLORS } from '../config/time-block.colors'
import { useTimeBlockForm } from '../hooks/use-time-block-form.hook'
import styles from './time-block-form.module.scss'

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
        label="Duration:"
        placeholder="Enter duration"
        register={{
          ...register('duration', { valueAsNumber: true }),
        }}
        error={errors['duration']}
      />
      <Controller
        control={control}
        name="color"
        render={({ field: { value, onChange } }) => (
          <PrioritySelect
            data={TIME_BLOCK_COLORS}
            onChange={onChange}
            value={value || '#d0d0d0'}
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
