function AboutPage() {
  return (
    <div className="page">
      <h2 className="page__title">О приложении</h2>

      <p className="page__lead">
        Это учебное React-приложение для управления списком задач, созданное
        в рамках практических работ по дисциплине «Верстка и создание
        приложений».
      </p>

      <section className="about-section">
        <h3 className="about-section__title">Возможности</h3>
        <ul className="about-section__list">
          <li>Загрузка задач из открытого API JSONPlaceholder</li>
          <li>Добавление новых задач через форму</li>
          <li>Отметка задач как выполненных</li>
          <li>Удаление задач из списка</li>
          <li>Маршрутизация между страницами без перезагрузки (SPA)</li>
          <li>Отображение состояний загрузки и ошибок</li>
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-section__title">Технологии</h3>
        <ul className="about-section__list">
          <li>React 19 — библиотека для пользовательских интерфейсов</li>
          <li>Vite — современный сборщик</li>
          <li>React Router — клиентская маршрутизация</li>
          <li>JSONPlaceholder — открытый учебный API</li>
        </ul>
      </section>

      <section className="about-section">
        <h3 className="about-section__title">Источник данных</h3>
        <p>
          Список задач подгружается с{' '}
          <a
            className="about-link"
            href="https://jsonplaceholder.typicode.com/todos"
            target="_blank"
            rel="noreferrer"
          >
            jsonplaceholder.typicode.com/todos
          </a>
          . Это бесплатный fake REST API, который часто используется в учебных
          проектах.
        </p>
      </section>
    </div>
  )
}

export default AboutPage
