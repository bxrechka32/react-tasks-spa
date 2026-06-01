function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; {year} <strong>Маргарита</strong> — Практические работы №1–4
      </p>
      <p className="footer__sub">Верстка и создание приложений | РТУ МИРЭА</p>
    </footer>
  )
}

export default Footer
