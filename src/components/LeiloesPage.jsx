import Header from './Header'
import Filter from './Filter'
import Footer from './Footer'
import Newsletter from './Newsletter'
import { leiloes } from '../data/leiloes'
import './LeiloesPage.css'

function LeilaoCard({ item }) {
  const isMulti = Boolean(item.multiLotes)
  const botaoLabel = isMulti ? 'ACESSAR LOTES' : 'ACESSAR LOTE'

  return (
    <div className="home-leiloes-cards">
      <div className="card-image">
        <img
          src={item.imagem}
          alt={item.titulo}
          onError={(e) => { e.target.src = '/assets/img/placeholder-image.webp' }}
        />
        {item.desconto && <span className="card-desconto-tag">{item.desconto}</span>}
        {isMulti && <span className="card-multi-tag">{item.multiLotes} Lotes</span>}
      </div>

      {item.condicaoPagamento && (
        <div className="card-condicao">{item.condicaoPagamento}</div>
      )}

      <div className="card-content">
        <p>{item.titulo}</p>
      </div>

      <div className="card-content-judicial">
        <p>{item.tipo}</p>
      </div>

      {item.pracas.map((p, i) => (
        <div className="card-lances" key={i}>
          <p>{p.numero} {p.data}</p>
          <p>LANCE MÍNIMO: {p.lance}</p>
        </div>
      ))}

      <div className={`card-status ${item.statusClass}`}>
        <p>{item.status}</p>
      </div>

      <a
        className="btn-card"
        href={item.link || '#'}
        target={item.link ? '_blank' : undefined}
        rel={item.link ? 'noopener noreferrer' : undefined}
      >
        {botaoLabel}
      </a>
    </div>
  )
}

function Paginacao() {
  return (
    <div className="leiloes-paginacao">
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} className={`pagina-btn${n === 1 ? ' active' : ''}`}>{n}</button>
      ))}
    </div>
  )
}

export default function LeiloesPage() {
  return (
    <>
      <img src="/assets/img/fundo-sp.jpg" alt="Alfa Leilões" className="home-background" />
      <Header />
      <main>
        <Filter />

        <section id="leiloes-listagem">
          <div className="container">
            <div className="leiloes-listagem-title">
              <p className="title">LEILÕES EM ANDAMENTO</p>
            </div>

            <Paginacao />

            <div className="cards-wrapper leiloes-cards-wrapper">
              {leiloes.map((item) => (
                <LeilaoCard item={item} key={item.id} />
              ))}
            </div>

            <Paginacao />
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
