import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    tasks = [],
    onDeleteTaskButtonClick,
    onToggleTaskDoneChange,
  } = props

  const hasTasks = true

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          classname="todo__item"
          key={task.id}
          onDeleteButtonClick={onDeleteTaskButtonClick}
          onToggleTaskDoneChange={onToggleTaskDoneChange}
          {...task}
        />
      ))}
    </ul>
  )
}

export default TodoList