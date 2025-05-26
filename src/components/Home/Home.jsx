import './Home.scss'

const Home = () => {
  return (
    <div className="newspaper-home">
      <header className="newspaper-header">
        <h1 className="newspaper-title">The Digital Daily</h1>
        <p className="newspaper-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <hr className="newspaper-divider" />
      </header>
      <section className="newspaper-intro">
        <h2>Welcome to The Digital Daily</h2>
        <p>
          Your trusted source for up-to-date news, reports, and analysis. Explore the latest national and international headlines, economy, culture, sports, and much more.
        </p>
      </section>
      <section className="newspaper-featured">
        <h3>Featured News</h3>
        <ul>
          <li>✔️ Breaking news: Stay informed with the latest updates.</li>
          <li>✔️ Exclusive reports and interviews.</li>
          <li>✔️ Expert opinion and analysis.</li>
        </ul>
      </section>
      <footer className="newspaper-footer">
        <hr className="newspaper-divider" />
        <p>© {new Date().getFullYear()} The Digital Daily. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home