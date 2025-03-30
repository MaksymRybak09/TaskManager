'use client'

import { TasksTable } from '@/features/TasksTable'
import { COLUMNS } from '@/shared/constants/task-table-columns'
import { useTaskDND } from '@/shared/hooks/tasks/use-task-dnd'
import { useTasks } from '@/shared/hooks/tasks/use-tasks'
import { DragDropContext } from '@hello-pangea/dnd'

function TaskBoard() {
  const { items, setItems } = useTasks()
  const { onDragEnd } = useTaskDND()

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {COLUMNS.map((column) => (
        <TasksTable
          items={items}
          label={column.label}
          value={column.value}
          setItems={setItems}
          key={column.value}
        />
      ))}
    </DragDropContext>
  )
}

export default TaskBoard
