import { useEffect, useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

function TasksPage() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка сети')
        }
        return response.json()
      })
      .then((data) => {
        setTasks(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Ошибка загрузки данных')
        setLoading(false)
      })
  }, [])

  function addTask(taskText) {
    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false,
    }
    setTasks([newTask, ...tasks])
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  return (
    <div className="page">
      <h2 className="page__title">Список задач</h2>
      <p className="page__lead">
        Добавляйте свои задачи или работайте с примером из открытого API.
      </p>

      <TaskForm addTask={addTask} />

      {loading && <p className="status status--loading">Загрузка...</p>}
      {error && <p className="status status--error">{error}</p>}

      {!loading && !error && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      )}
    </div>
  )
}

export default TasksPage
