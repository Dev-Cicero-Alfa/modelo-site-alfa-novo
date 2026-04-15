import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { lotes } from '../data/lotes'
import Header from './Header'
import Filter from './Filter'
import Footer from './Footer'
import Destaques from './Destaques'
import './LotePage.css'

function useCountdown(targetDate) {
  const calc = () => {
    const diff = new Date(targetDate) - new Date()
    if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
    return {
      dias:     Math.floor(diff / 86400000),
      horas:    Math.floor((diff % 86400000) / 3600000),
      minutos:  Math.floor((diff % 3600000)  / 60000),
      segundos: Math.floor((diff % 60000)    / 1000),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(t)
  }, [targetDate])
  return time
}

export default function LotePage() {
  const { id } = useParams()
  const lote = lotes.find((l) => l.id === Number(id))
  const [fotoAtiva, setFotoAtiva] = useState(0)

  // Usa a data de fechamento da 2ª praça como alvo do countdown
  const praçaFinal = lote?.praças[lote.praças.length - 1]
  const dataFechamento = praçaFinal
    ? praçaFinal.fechamento.replace(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}:\d{2})/, '$3-$2-$1T$4:00')
    : null
  const countdown = useCountdown(dataFechamento)

  if (!lote) {
    return (
      <>
        <Header />
        <div style={{ textAlign: 'center', padding: '80px 20px', background: '#fff' }}>
          <h2>Lote não encontrado</h2>
          <Link to="/" style={{ color: '#42ad73', marginTop: 16, display: 'inline-block' }}>← Voltar</Link>
        </div>
        <Footer />
      </>
    )
  }

  const imgPrincipal = lote.fotos[fotoAtiva] || '/assets/img/placeholder-image.webp'

  return (
    <>
      <img src="/assets/img/fundo-sp.jpg" alt="Alfa Leilões" className="home-background" />
      <Header />
      <Filter />

      <div className="lote-page">
        <div className="lote-container">
          <div className="lote-inner">

          {/* Badge tipo */}
          <div className="lote-tipo-bar">
            <span className="lote-badge-tipo">{lote.tipo}</span>
            <span className="lote-badge-dot">?</span>
          </div>

          {/* Processo / Horário / Local */}
          <div className="lote-info-row">
            <div className="lote-info-cell">
              <div className="lote-info-label">Processo</div>
              <div className="lote-info-value">{lote.processo}</div>
            </div>
            <div className="lote-info-cell">
              <div className="lote-info-label">Horário de Brasília</div>
              <div className="lote-info-value">{lote.horario}</div>
            </div>
            <div className="lote-info-cell">
              <div className="lote-info-label">Local do Leilão</div>
              <div className="lote-info-value">{lote.local}</div>
            </div>
          </div>

          {/* Tabela de praças */}
          <table className="lote-pracas-table">
            <thead>
              <tr>
                <th></th>
                <th>Abertura</th>
                <th>Fechamento</th>
                <th>Lance inicial</th>
              </tr>
            </thead>
            <tbody>
              {lote.praças.map((p) => (
                <tr key={p.numero}>
                  <td><strong>{p.numero}</strong></td>
                  <td>{p.abertura}</td>
                  <td>{p.fechamento}</td>
                  <td>{p.lance}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Botões */}
          <div className="lote-btns-row">
            <button className="lote-btn">📄 Edital do Leilão</button>
            <button className="lote-btn">📁 Documentos</button>
            <button className="lote-btn blue">✅ Habilite-se</button>
            <button className="lote-btn">💳 Proposta de Compra Parcelada</button>
          </div>

          {/* Título */}
          <h1 className="lote-titulo">{lote.titulo}</h1>

          {/* Imagem + Descrição */}
          <div className="lote-content-grid">
            <div className="lote-img-col">
              <div className="lote-img-wrapper">
                <img className="lote-main-img" src={imgPrincipal} alt={lote.titulo} onError={(e) => { e.target.src = '/assets/img/placeholder-image.webp' }} />
                {lote.fotos.length > 1 && (
                  <>
                    <button className="lote-img-arrow lote-img-prev" onClick={() => setFotoAtiva((f) => (f === 0 ? lote.fotos.length - 1 : f - 1))}>&#8249;</button>
                    <button className="lote-img-arrow lote-img-next" onClick={() => setFotoAtiva((f) => (f === lote.fotos.length - 1 ? 0 : f + 1))}>&#8250;</button>
                    <div className="lote-img-counter">{fotoAtiva + 1} / {lote.fotos.length}</div>
                  </>
                )}
              </div>
              <div className="lote-area-row">
                <span>📐</span> {lote.area}
              </div>
              {/* Miniaturas */}
              {lote.fotos.length > 1 && (
                <div className="lote-thumbs">
                  {lote.fotos.map((f, i) => (
                    <img
                      key={i}
                      src={f}
                      alt={`Foto ${i + 1}`}
                      className={i === fotoAtiva ? 'active' : ''}
                      onClick={() => setFotoAtiva(i)}
                      onError={(e) => { e.target.src = '/assets/img/placeholder-image.webp' }}
                    />
                  ))}
                </div>
              )}
              <button className="lote-fotos-btn" style={{ marginTop: 10 }}>
                🖼 Fotos
              </button>
            </div>

            <div className="lote-descricao-box">
              <h3>Descrição do lote</h3>
              <ul className="lote-topicos">
                {lote.topicos.map((t, i) => (
                  <li key={i}>
                    <span className="lote-topico-label">{t.label}:</span> {t.texto}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mapa + Encerramento lado a lado */}
          <div className="lote-mapa-enc-row">
            <div className="lote-mapa-box">
              <iframe
                title="Localização do imóvel"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(lote.endereco)}&output=embed`}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="lote-encerramento">
              <span className="lote-enc-label">Encerramento</span>
              <div className="lote-enc-timer">
                {[
                  [countdown.dias,     'dia(s)'],
                  [countdown.horas,    'hora(s)'],
                  [countdown.minutos,  'minuto(s)'],
                  [countdown.segundos, 'segundo(s)'],
                ].map(([val, label], i, arr) => (
                  <div className="lote-enc-unit" key={label}>
                    <div className="lote-enc-num">{String(val).padStart(2, '0')}</div>
                    <div className="lote-enc-suffix">{label}</div>
                    {i < arr.length - 1 && <span className="lote-enc-sep">:</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Área de lances + Últimas ofertas */}
          <div className="lote-lance-grid">
            <div className="lote-lance-box">
              <h4>ÁREA DE LANCES (À VISTA)</h4>
              <div className="lote-lance-body">
                <div className="lote-lance-valor">{lote.praças[lote.praças.length - 1].lance.replace('R$ ', '')}</div>
                <button className="lote-lance-enviar">ENVIAR LANCE AGORA ▼</button>
                <div className="lote-incremento-label">INCREMENTO</div>
                <div className="lote-incremento-val">{lote.incremento}</div>
              </div>
            </div>

            <div className="lote-lance-box">
              <h4>ÚLTIMAS OFERTAS</h4>
              <div className="lote-lance-body">
                <div className="lote-sem-oferta">Nenhum lance vencendo até o momento</div>
              </div>
            </div>
          </div>

          </div>{/* fim lote-inner */}

          {/* Outros leilões */}
          <div className="lote-outros-titulo">OUTROS LEILÕES</div>
          <Destaques hideTitle excludeId={lote.id} />

        </div>
      </div>

      <Footer />
    </>
  )
}
