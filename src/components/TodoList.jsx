import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    tasks = [],
    filteredTasks,
    onDeleteTaskButtonClick,
    onToggleTaskDoneChange,
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
  } = props

  const hasTasks = tasks.length > 0
  const isEmptyFilteredTasks = filteredTasks?.length === 0

  if (!hasTasks) {
    return <div className="todo__empty-message">There are no tasks yet</div>
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return <div className="todo__empty-message">Tasks not found</div>
  }

  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
          classname="todo__item"
          key={task.id}
          ref={task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
          onDeleteButtonClick={onDeleteTaskButtonClick}
          onToggleTaskDoneChange={onToggleTaskDoneChange}
          {...task}
        />
      ))}
    </ul>
  )
}

export default TodoList