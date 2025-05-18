import { TaskBoard } from '@/features/TaskBoard'
import Heading from '@/shared/components/heading/Heading'

function TasksPage() {
  return (
    <>
      <Heading size="4">Tasks</Heading>
      <TaskBoard />
    </>
  )
}

export default TasksPage
