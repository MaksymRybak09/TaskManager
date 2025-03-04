import { TaskBoard } from '@/features/TaskBoard'
import Heading from '@/shared/components/heading/Heading'

function TasksPage() {
  return (
    <>
      <Heading title="Tasks" />
      <TaskBoard />
    </>
  )
}

export default TasksPage
