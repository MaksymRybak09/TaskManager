import TasksPage from '@/pages/TasksPage'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tasks',
  ...NO_INDEX_PAGE,
}

export default TasksPage
