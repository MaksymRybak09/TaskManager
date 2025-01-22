import { Sidebar } from '@/entity/Sidebar'
import { TaskBoard } from '@/features/TaskBoard'
import HomeLayout from '@/shared/layout/HomeLayout/HomeLayout'
import { HeaderWithLogOut } from '@/widgets/HeaderWithLogOut'

function TasksPage() {
  return (
    <HomeLayout header={<HeaderWithLogOut />} sidebar={<Sidebar />}>
      <TaskBoard />
    </HomeLayout>
  )
}

export default TasksPage
