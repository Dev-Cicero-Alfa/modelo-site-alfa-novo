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

          {/* CTA Redes Sociais */}
          <div className="lote-redes-cta">
            <div className="lote-redes-header">
              <h3 className="lote-redes-titulo">Acompanhe a Alfa Leilões</h3>
              <p className="lote-redes-sub">
                Receba oportunidades em primeira mão e fique por dentro de cada leilão.
              </p>
            </div>
            <div className="lote-redes-grid">
              <a
                className="lote-rede-card lote-rede-wa"
                href="https://whatsapp.com/channel/0029VbBJiIwBPzjf9zVN2t3X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="lote-rede-icon">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <circle cx="16" cy="16" r="16" fill="#25D366" />
                    <path d="M23.5 8.5C21.6 6.6 19.1 5.5 16.4 5.5C10.9 5.5 6.4 10 6.4 15.5C6.4 17.3 6.9 19.1 7.8 20.6L6.3 26L11.8 24.5C13.3 25.3 14.8 25.7 16.4 25.7C21.9 25.7 26.4 21.2 26.4 15.7C26.4 13 25.4 10.4 23.5 8.5ZM16.4 23.9C14.9 23.9 13.5 23.5 12.2 22.8L11.9 22.6L8.7 23.5L9.6 20.4L9.4 20.1C8.6 18.8 8.2 17.2 8.2 15.5C8.2 11 11.9 7.3 16.4 7.3C18.6 7.3 20.6 8.1 22.1 9.7C23.7 11.2 24.5 13.3 24.5 15.5C24.6 20.1 20.9 23.9 16.4 23.9ZM20.9 17.6C20.6 17.5 19.2 16.8 19 16.7C18.7 16.6 18.6 16.6 18.4 16.9C18.2 17.2 17.7 17.8 17.6 18C17.4 18.2 17.3 18.2 17 18.1C15.5 17.3 14.5 16.7 13.5 15C13.3 14.7 13.6 14.7 13.9 14.1C14 13.9 13.9 13.8 13.9 13.6C13.8 13.4 13.3 12 13.1 11.5C12.9 11 12.7 11 12.5 11H12C11.8 11 11.4 11.1 11.1 11.4C10.8 11.7 10.1 12.4 10.1 13.8C10.1 15.2 11.1 16.5 11.3 16.7C11.4 16.9 13.3 19.8 16.2 21C18 21.7 18.7 21.8 19.6 21.6C20.1 21.5 21.3 20.9 21.6 20.2C21.8 19.5 21.8 18.9 21.7 18.8C21.6 18.6 21.2 18.5 20.9 17.6Z" fill="white" />
                  </svg>
                </div>
                <div className="lote-rede-text">
                  <span className="lote-rede-badge">💬 Comunidade</span>
                  <h4 className="lote-rede-card-titulo">Canal no WhatsApp</h4>
                  <p className="lote-rede-desc">
                    Avisos de novos leilões, datas e oportunidades direto no seu celular.
                  </p>
                </div>
                <span className="lote-rede-btn lote-rede-btn-wa">Entrar →</span>
              </a>

              <a
                className="lote-rede-card lote-rede-yt"
                href="https://www.youtube.com/@alfaleiloes1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="lote-rede-icon">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <circle cx="16" cy="16" r="16" fill="#ff0000" />
                    <path d="M13 11L22 16L13 21V11Z" fill="white" />
                  </svg>
                </div>
                <div className="lote-rede-text">
                  <span className="lote-rede-badge">▶ Vídeos</span>
                  <h4 className="lote-rede-card-titulo">Canal no YouTube</h4>
                  <p className="lote-rede-desc">
                    Tours por imóveis, dicas exclusivas e transmissões ao vivo dos leilões.
                  </p>
                </div>
                <span className="lote-rede-btn lote-rede-btn-yt">Inscrever-se →</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
