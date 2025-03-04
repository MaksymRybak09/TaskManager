'use client'

import { TasksTable } from '@/features/TasksTable'
import { COLUMNS } from '@/shared/constants/task-table-columns'
import { useTaskDND } from '@/shared/hooks/tasks/use-task-dnd'
import { useTasks } from '@/shared/hooks/tasks/use-tasks'
import TaskRowLayout from '@/shared/layout/TaskRowLayout/TaskRowLayout'
import { DragDropContext } from '@hello-pangea/dnd'
import styles from './task-board.module.scss'

function TaskBoard() {
  const { items, setItems } = useTasks()
  const { onDragEnd } = useTaskDND()

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <TaskRowLayout
          taskInput={<span>Task name:</span>}
          datePicker={<span>Due date:</span>}
          prioritySelect={<span>Priority:</span>}
          deleteTaskButton={<span></span>}
          rowStyles={styles.row}
        />
        <div>
          {COLUMNS.map((column) => (
            <TasksTable
              items={items}
              label={column.label}
              value={column.value}
              setItems={setItems}
              key={column.value}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  )
}

export default TaskBoard
