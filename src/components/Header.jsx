import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand">
          <span className="header__icon" aria-hidden="true">✅</span>
          <div>
            <h1 className="header__title">Список задач</h1>
            <p className="header__subtitle">Управляй своими делами просто</p>
          </div>
        </Link>
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              'nav__link' + (isActive ? ' nav__link--active' : '')
            }
          >
            Задачи
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              'nav__link' + (isActive ? ' nav__link--active' : '')
            }
          >
            О приложении
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
