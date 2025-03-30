import { NewTaskButton } from '@/features/NewTaskButton'
import { TaskRow } from '@/features/TaskRow'
import { FILTERS } from '@/shared/constants/task-table-filters'
import { filterTasks } from '@/shared/helpers/filter-tasks'
import type { ITask } from '@/shared/types/task.types'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import { Dispatch, SetStateAction } from 'react'
import styles from './task-table.module.scss'

type TasksTableProps = {
  value: string
  label: string
  items: ITask[] | undefined
  setItems: Dispatch<SetStateAction<ITask[] | undefined>>
}

function TasksTable(props: TasksTableProps) {
  return (
    <Droppable droppableId={props.value}>
      {(provided) => (
        <div
          className={styles['table']}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className={styles['table__title']}>{props.label}</div>
          {filterTasks(props.items, props.value)?.map(
            (item: ITask, index: number) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskRow
                      key={item.id}
                      item={item}
                      setItems={props.setItems}
                    />
                  </div>
                )}
              </Draggable>
            ),
          )}
          {provided.placeholder}
          <div className={styles['table__button']}>
            {props.value !== 'completed' && (
              <NewTaskButton
                setItems={props.setItems}
                filterDate={
                  FILTERS[props.value]
                    ? FILTERS[props.value].format()
                    : undefined
                }
              />
            )}
          </div>
        </div>
      )}
    </Droppable>
  )
}

export default TasksTable
