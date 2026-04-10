import './Newsletter.css'

export default function Newsletter() {
  return (
    <section id="new-letter">
      <div className="news-letter-home">
        <div className="container">
          <div className="news-letter-container">

            <div className="news-letter-content">
              <p className="nl-title">Não perca nenhuma novidade!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis</p>
            </div>

            <div className="news-letter-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="nl-inputs-row">
                  <input type="text"  placeholder="Insira seu nome" />
                  <input type="email" placeholder="Insira seu E-mail" />
                  <input type="tel"   placeholder="Insira seu Telefone" />
                </div>
                <div className="nl-btn-row">
                  <button type="submit" className="btn-form-news-letter">Inscrever-se</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
