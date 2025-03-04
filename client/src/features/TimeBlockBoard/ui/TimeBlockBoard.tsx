'use client'

import { TimeBlockForm } from '@/features/TimeBlockForm'
import { TimeBlockList } from '@/features/TimeBlockList'
import { TimeBlockFormState } from '@/shared/types/time-block.types'
import { FormProvider, useForm } from 'react-hook-form'
import styles from './time-block-board.module.scss'

function TimeBlockBoard() {
  const formMethods = useForm<TimeBlockFormState>()

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
