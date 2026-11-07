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

  const deleteTask = (taskId) => {
    console.log(`Delete task with id: ${taskId}`)
  }

  const toggleTaskDone = (taskId, isDone) => {
    console.log(`The task is ${isDone ? 'done' : 'not done'} with id: ${taskId}`)
  }

  const filterTasks = (searchTerm) => {
    console.log(`Search term: ${searchTerm}`)
  }

  const addTask = (taskTitle) => {
    console.log(`Add task with title: ${tasks.title}`)
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onToggleTaskDoneChange={toggleTaskDone}
      />
    </div>
  )
}

export default Todo