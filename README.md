# Список задач — React SPA

Учебное SPA-приложение «Список задач», созданное в рамках практических работ
№1–4 по дисциплине **«Верстка и создание приложений»** (РТУ МИРЭА, 4 семестр).

> Онлайн-версия: **<https://react-tasks-spa.vercel.app>**
>
> Репозиторий: **<https://github.com/bxrechka32/react-tasks-spa>**

## О проекте

Одностраничное приложение на React + Vite, которое умеет:

- загружать список задач из открытого API
  [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos);
- добавлять новые задачи через форму;
- отмечать задачи как выполненные (✔ / —);
- удалять задачи;
- переключаться между страницами без перезагрузки (React Router);
- показывать состояния «загрузка» и «ошибка»;
- корректно отображаться на мобильных экранах (адаптивная вёрстка).

## Используемые технологии

- **React 19** — UI-библиотека;
- **Vite 7** — сборщик и dev-сервер;
- **React Router v7** — клиентская маршрутизация;
- **JSONPlaceholder** — fake REST API;
- **CSS3** — собственные стили, без UI-фреймворков.

## Структура проекта

```
my-app/
├── index.html              # HTML-шаблон Vite
├── package.json            # Зависимости и npm-скрипты
├── vercel.json             # SPA-rewrite для Vercel
├── vite.config.js
└── src/
    ├── main.jsx            # Точка входа, BrowserRouter
    ├── App.jsx             # Корневой компонент, маршруты
    ├── App.css             # Стили приложения
    ├── index.css           # Сброс body/html
    ├── components/
    │   ├── Header.jsx      # Шапка + навигация (NavLink)
    │   ├── Footer.jsx      # Подвал
    │   ├── TaskForm.jsx    # Управляемая форма добавления
    │   ├── TaskList.jsx    # Список + счётчик + пустое состояние
    │   └── TaskItem.jsx    # Карточка задачи + toggle + delete
    └── pages/
        ├── TasksPage.jsx   # / — список задач, fetch + CRUD
        ├── AboutPage.jsx   # /about — описание проекта
        └── NotFoundPage.jsx # 404
```

## Маршруты

| URL       | Компонент      | Назначение                              |
|-----------|----------------|------------------------------------------|
| `/`       | `TasksPage`    | Список задач, форма добавления, CRUD     |
| `/about`  | `AboutPage`    | Информация о приложении и технологиях    |
| `*`       | `NotFoundPage` | 404 для всех остальных адресов           |

## API

Источник данных: `https://jsonplaceholder.typicode.com/todos?_limit=10`.

Используются поля:

- `id` — ключ для React (`key`);
- `title` — текст задачи;
- `completed` — статус выполнения.

Запрос делается из `src/pages/TasksPage.jsx` в хуке `useEffect`, обрабатываются
состояния `loading` и `error`.

## Запуск

```bash
# 1. Установить зависимости
npm install

# 2. Dev-сервер с HMR
npm run dev      # → http://localhost:5173

# 3. Production-сборка
npm run build    # → папка dist/

# 4. Локальный preview production-сборки
npm run preview  # → http://localhost:4173
```

## Деплой на Vercel

1. Зарегистрироваться на <https://vercel.com> через GitHub.
2. **New Project → Import Git Repository** → выбрать репозиторий с этим
   проектом.
3. Vercel автоматически определяет настройки Vite:
   - **Framework Preset:** Vite;
   - **Build Command:** `npm run build`;
   - **Output Directory:** `dist`.
4. Если корневая папка проекта — `my-app/`, указать её в поле
   **Root Directory**.
5. Нажать **Deploy** — через минуту приложение будет доступно онлайн.

В корне уже лежит `vercel.json` с rewrite-правилом, чтобы React Router
корректно работал при прямом переходе по ссылкам вида `/about`.

## Деплой на GitHub Pages (альтернатива)

```bash
npm install --save-dev gh-pages
# В package.json добавить:
#   "homepage": "https://<логин>.github.io/<репозиторий>",
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d dist"
npm run deploy
```

## Скриншоты

> Положите снимки экрана в папку `screenshots/` и подставьте ссылки:
> `![Главная](screenshots/tasks.png)` — страница со списком задач,
> `![О приложении](screenshots/about.png)` — страница `/about`.

## Авторство

Маргарита, 4 семестр, 2025–2026 уч. год.
Преподаватель: Пьянкова Марина Анатольевна.
