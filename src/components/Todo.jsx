import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
  const tasks = [
    { id: "task-1", title: "Finish React Lesson", isDone: false },
    { id: "task-2", title: "Do the project", isDone: false },
    { id: "task-3", title: "Read Petzold", isDone: false },
    { id: "task-4", title: "Take a nap", isDone: false },
    { id: "task-5", title: "Fix Vite HMR", isDone: true },
  ]

  const deleteAllTasks = () => {
    console.log("Delete all tasks")
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList tasks={tasks} />
    </div>
  )
}

export default Todo