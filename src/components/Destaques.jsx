import { Link } from 'react-router-dom'
import { lotes } from '../data/lotes'
import './Destaques.css'

export default function Destaques({ hideTitle = false, excludeId = null }) {
  const cards = lotes.filter((l) => l.id !== excludeId)

  return (
    <section id="destaques">
      {!hideTitle && (
        <div className="home-leiloes-destaques">
          <div className="leiloes-destaques-title">
            <p className="title">LEILÕES EM DESTAQUE</p>
          </div>
        </div>
      )}

      <div className="container">
        <div className="cards-wrapper">
          {cards.map((card) => (
            <div className="home-leiloes-cards" key={card.id}>
              <div className="card-image">
                <img
                  src={card.fotos[0]}
                  alt={card.titulo}
                  onError={(e) => { e.target.src = '/assets/img/placeholder-image.webp' }}
                />
              </div>
              <div className="card-content">
                <p>{card.comarca}</p>
              </div>
              <div className="card-content-judicial">
                <p>{card.tipo}</p>
                <img src="/assets/img/logo-alfa-card.png" alt="Alfa Leilões" />
              </div>
              <div className="card-lances">
                <p>1ª Praça {card.praças[0].abertura}</p>
                <p>LANCE MÍNIMO: {card.praças[0].lance}</p>
              </div>
              <div className="card-lances">
                <p>2ª Praça {card.praças[1]?.abertura}</p>
                <p>LANCE MÍNIMO: {card.praças[1]?.lance}</p>
              </div>
              <div className={`card-status ${card.statusClass}`}>
                <p>{card.status}</p>
              </div>
              <Link to={`/lote/${card.id}`} className="btn-card">ACESSAR LOTE</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
