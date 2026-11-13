import { useState, useEffect, useRef } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"
import Button from "./Button"

const Todo = () => {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: "task-1", title: "Finish React Lesson", isDone: false },
      { id: "task-2", title: "Do the project", isDone: false },
      { id: "task-3", title: "Read Petzold", isDone: false },
      { id: "task-4", title: "Take a nap", isDone: false },
      { id: "task-5", title: "Fix Vite HMR", isDone: true },
    ]
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const newTaskInputRef = useRef(null)
  const firstIncompleteTaskRef = useRef(null)
  const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id

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

  const addTask = () => {
    // const newTaskTitle = newTaskInputRef.current?.value.trim()
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto.randomUUID?.() ?? `task-${Date.now()}`,
        title: newTaskTitle,
        isDone: false,
      }
      setTasks([...tasks, newTask])
      setNewTaskTitle('')
      // newTaskInputRef.current.value = ''
      setSearchQuery('')
      newTaskInputRef.current?.focus()
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    newTaskInputRef.current?.focus()
  }, [])

  const clearSearchQuery = searchQuery.trim().toLowerCase()
  const filteredTasks = clearSearchQuery.length > 0
    ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery))
    : null

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        newTaskInputRef={newTaskInputRef}
      />
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <Button onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })}>
        Show first incomplete task
      </Button>
      <TodoList
        tasks={tasks}
        filteredTasks={filteredTasks}
        firstIncompleteTaskRef={firstIncompleteTaskRef}
        firstIncompleteTaskId={firstIncompleteTaskId}
        onDeleteTaskButtonClick={deleteTask}
        onToggleTaskDoneChange={toggleTaskDone}
      />
    </div>
  )
}

export default Todo