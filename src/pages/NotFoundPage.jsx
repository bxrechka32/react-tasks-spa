import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="page page--center">
      <h2 className="page__title">404</h2>
      <p className="page__lead">Страница не найдена.</p>
      <Link to="/" className="page__back">
        Вернуться к списку задач
      </Link>
    </div>
  )
}

export default NotFoundPage
