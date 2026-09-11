import './Newsletter.css'

export default function Newsletter() {
  return (
    <section id="new-letter">
      <div className="news-letter-home">
        <div className="container">
          <div className="news-letter-container">

            <div className="news-letter-content">
              <p className="nl-title">Não perca nenhuma novidade!</p>
              <p>Encerramentos da semana, curadoria de imóveis imperdíveis, eventos
              e muito mais. Insira seu melhor contato e conheça mais sobre a Alfa Leilões.</p>
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
