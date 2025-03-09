'use client'

import { TimeBlockForm } from '@/features/TimeBlockForm'
import { TimeBlockList } from '@/features/TimeBlockList'
import type { TimeBlockFormState } from '@/shared/types/time-block.types'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import styles from './time-block-board.module.scss'
import { timeBlockFormSchema } from '../config/time-block-form.config'

function TimeBlockBoard() {
  const formMethods = useForm<TimeBlockFormState>({
    resolver: yupResolver(timeBlockFormSchema),
    defaultValues: {
      id: undefined,
      name: undefined,
      duration: 10,
      color: '#f3f3f3',
    },
  })

  return (
    <FormProvider {...formMethods}>
      <div className={styles.board}>
        <TimeBlockList />
        <TimeBlockForm />
      </div>
    </FormProvider>
  )
}

export default TimeBlockBoard
