import { useState } from 'react'

function TaskForm({ addTask }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    addTask(trimmed)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form__input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите задачу"
      />
      <button
        className="task-form__button"
        type="submit"
        disabled={!text.trim()}
      >
        Добавить
      </button>
    </form>
  )
}

export default TaskForm
