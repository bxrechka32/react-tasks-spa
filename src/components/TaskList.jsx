import TaskItem from './TaskItem'

function TaskList({ tasks, deleteTask, toggleTask }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list__empty">
        <p>Задач пока нет — добавьте первую задачу выше.</p>
      </div>
    )
  }

  const total = tasks.length
  const done = tasks.filter((t) => t.completed).length

  return (
    <section className="task-list">
      <div className="task-list__head">
        <h2 className="task-list__heading">Мои задачи</h2>
        <span className="task-list__counter">
          выполнено {done} из {total}
        </span>
      </div>
      <ul className="task-list__ul">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
    </section>
  )
}

export default TaskList
