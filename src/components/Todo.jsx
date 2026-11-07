import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: "task-1", title: "Finish React Lesson", isDone: false },
    { id: "task-2", title: "Do the project", isDone: false },
    { id: "task-3", title: "Read Petzold", isDone: false },
    { id: "task-4", title: "Take a nap", isDone: false },
    { id: "task-5", title: "Fix Vite HMR", isDone: true },
  ])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Are you sure you want to delete all tasks?')
    if (isConfirmed) {
      setTasks([])
    }
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const toggleTaskDone = (taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone }
        }
        return task
      })
    )
  }

  const filterTasks = (searchTerm) => {
    console.log(`Search term: ${searchTerm}`)
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: `task-${tasks.length + 1}`,
        title: newTaskTitle,
        isDone: false,
      }
      setTasks([...tasks, newTask])
      setNewTaskTitle('')
    }
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
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