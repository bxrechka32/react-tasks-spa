function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li className={'task-item' + (task.completed ? ' task-item--done' : '')}>
      <button
        type="button"
        className="task-item__check"
        onClick={() => toggleTask(task.id)}
        aria-label={task.completed ? 'Отметить как невыполненную' : 'Отметить как выполненную'}
      >
        {task.completed ? '✔' : ''}
      </button>
      <span className="task-item__text">{task.title}</span>
      <button
        type="button"
        className="task-item__delete"
        onClick={() => deleteTask(task.id)}
        aria-label="Удалить задачу"
      >
        Удалить
      </button>
    </li>
  )
}

export default TaskItem
