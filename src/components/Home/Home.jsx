import './Home.scss'

const Home = () => {
  return (
    <div className="newspaper-home">
      <header className="newspaper-header">
        <h1 className="newspaper-title">El Diario Digital</h1>
        <p className="newspaper-date">{new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <hr className="newspaper-divider" />
      </header>
      <section className="newspaper-intro">
        <h2>Bienvenido a El Diario Digital</h2>
        <p>
          Tu fuente confiable de noticias actualizadas, reportajes y análisis. Explora las últimas novedades nacionales e internacionales, economía, cultura, deportes y mucho más.
        </p>
      </section>
      <section className="newspaper-featured">
        <h3>Noticias Destacadas</h3>
        <ul>
          <li>✔️ Última hora: Mantente informado con las noticias más recientes.</li>
          <li>✔️ Reportajes exclusivos y entrevistas.</li>
          <li>✔️ Opinión y análisis de expertos.</li>
        </ul>
      </section>
      <footer className="newspaper-footer">
        <hr className="newspaper-divider" />
        <p>© {new Date().getFullYear()} El Diario Digital. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default Home