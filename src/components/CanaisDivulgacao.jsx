import './CanaisDivulgacao.css'

const whatsapp = {
  id: 'whatsapp',
  badge: '💬 Comunidade',
  titulo: 'Canal no WhatsApp',
  descricao:
    'Receba em primeira mão os melhores leilões, datas de abertura e oportunidades exclusivas. Entre para o nosso canal e não perca nenhum imóvel.',
  botao: 'Entrar no Canal',
  link: 'https://whatsapp.com/channel/0029VbBJiIwBPzjf9zVN2t3X',
  variant: 'wa',
  icon: (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path d="M23.5 8.5C21.6 6.6 19.1 5.5 16.4 5.5C10.9 5.5 6.4 10 6.4 15.5C6.4 17.3 6.9 19.1 7.8 20.6L6.3 26L11.8 24.5C13.3 25.3 14.8 25.7 16.4 25.7C21.9 25.7 26.4 21.2 26.4 15.7C26.4 13 25.4 10.4 23.5 8.5ZM16.4 23.9C14.9 23.9 13.5 23.5 12.2 22.8L11.9 22.6L8.7 23.5L9.6 20.4L9.4 20.1C8.6 18.8 8.2 17.2 8.2 15.5C8.2 11 11.9 7.3 16.4 7.3C18.6 7.3 20.6 8.1 22.1 9.7C23.7 11.2 24.5 13.3 24.5 15.5C24.6 20.1 20.9 23.9 16.4 23.9ZM20.9 17.6C20.6 17.5 19.2 16.8 19 16.7C18.7 16.6 18.6 16.6 18.4 16.9C18.2 17.2 17.7 17.8 17.6 18C17.4 18.2 17.3 18.2 17 18.1C15.5 17.3 14.5 16.7 13.5 15C13.3 14.7 13.6 14.7 13.9 14.1C14 13.9 13.9 13.8 13.9 13.6C13.8 13.4 13.3 12 13.1 11.5C12.9 11 12.7 11 12.5 11H12C11.8 11 11.4 11.1 11.1 11.4C10.8 11.7 10.1 12.4 10.1 13.8C10.1 15.2 11.1 16.5 11.3 16.7C11.4 16.9 13.3 19.8 16.2 21C18 21.7 18.7 21.8 19.6 21.6C20.1 21.5 21.3 20.9 21.6 20.2C21.8 19.5 21.8 18.9 21.7 18.8C21.6 18.6 21.2 18.5 20.9 17.6Z" fill="white" />
    </svg>
  ),
}

const canais = [
  {
    id: 'youtube',
    badge: '▶ Vídeos',
    titulo: 'Canal no YouTube',
    descricao:
      'Dicas exclusivas, tours por imóveis e transmissões ao vivo dos nossos leilões. Inscreva-se e ative o sininho!',
    botao: 'Inscreva-se',
    link: 'https://www.youtube.com/@alfaleiloes1',
    variant: 'yt',
    icon: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
        <circle cx="16" cy="16" r="16" fill="#ff0000" />
        <path d="M13 11L22 16L13 21V11Z" fill="white" />
      </svg>
    ),
  },
  {
    id: 'blog',
    badge: '📰 Conteúdo',
    titulo: 'Blog Alfa Leilões',
    descricao:
      'Dicas, análises de mercado e orientações jurídicas sobre leilões. Conteúdo atualizado para você arrematar com segurança.',
    botao: 'Ver Blog',
    link: '#',
    variant: 'blog',
    icon: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
        <circle cx="16" cy="16" r="16" fill="#f5a51a" />
        <path d="M9 8H21C22.1 8 23 8.9 23 10V22C23 23.1 22.1 24 21 24H9C7.9 24 7 23.1 7 22V10C7 8.9 7.9 8 9 8ZM10 12V14H20V12H10ZM10 16V18H20V16H10ZM10 20V22H17V20H10Z" fill="white" />
      </svg>
    ),
  },
  {
    id: 'curso',
    badge: '🎓 Educação',
    titulo: 'Curso Alfa Leilões',
    descricao:
      'Aprenda a arrematar com segurança: do edital à matrícula do imóvel. Ministrado por especialistas em leilões.',
    botao: 'Saiba Mais',
    link: '#',
    variant: 'curso',
    icon: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
        <circle cx="16" cy="16" r="16" fill="#1a6ef5" />
        <path d="M16 7L5 12L16 17L25 13.1V19H27V12L16 7ZM9 16.5V20.5C9 22.4 12.1 24 16 24C19.9 24 23 22.4 23 20.5V16.5L16 19.5L9 16.5Z" fill="white" />
      </svg>
    ),
  },
  {
    id: 'lanceihub',
    badge: '🚀 Plataforma',
    titulo: 'LanceiHub',
    descricao:
      'Plataforma completa para leilões: calculadoras financeiras, checklists de investimento e oportunidades de negócio.',
    botao: 'Acessar LanceiHub',
    link: 'https://lanceihub.com/',
    variant: 'lancei',
    icon: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
        <circle cx="16" cy="16" r="16" fill="#5524E8" />
        <path d="M10 22V14L16 9L22 14V22H18V17H14V22H10Z" fill="white" />
      </svg>
    ),
  },
]

function Card({ c }) {
  return (
    <a
      className={`canal-card canal-${c.variant}`}
      href={c.link}
      target={c.link.startsWith('http') ? '_blank' : undefined}
      rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <div className={`canal-card-image canal-image-${c.variant}`}>
        <span className="canal-card-icon">{c.icon}</span>
        <span className={`canal-card-tag canal-tag-${c.variant}`}>{c.badge}</span>
      </div>
      <div className="canal-card-body">
        <h3 className="canal-titulo">{c.titulo}</h3>
        <p className="canal-desc">{c.descricao}</p>
        <span className={`canal-btn canal-btn-${c.variant}`}>{c.botao} →</span>
      </div>
    </a>
  )
}

export default function CanaisDivulgacao() {
  return (
    <section className="canais-section">
      <div className="canais-header-bar">
        <div className="container">
          <h2 className="canais-section-title">Conecte-se com a Alfa Leilões</h2>
          <p className="canais-section-sub">
            Fique por dentro de tudo e tenha acesso a ferramentas e conteúdos exclusivos.
          </p>
        </div>
      </div>

      <div className="container">
        {/* WhatsApp em destaque - banner estilo verde */}
        <div className="canais-featured-row">
          <div className="wa-section-header">
            <h3 className="wa-section-title">💬 Canal no WhatsApp</h3>
            <a
              className="wa-section-link"
              href={whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar canal →
            </a>
          </div>
          <div className="wa-banner-card">
            <div className="wa-banner-icon">{whatsapp.icon}</div>
            <div className="wa-banner-body">
              <h4 className="wa-banner-title">Receba novidades em primeira mão!</h4>
              <p className="wa-banner-desc">
                Fique por dentro dos melhores leilões, datas de abertura e oportunidades exclusivas.
                Entre para o nosso canal e não perca nenhum imóvel.
              </p>
              <a
                className="wa-banner-btn"
                href={whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Entrar no Canal
              </a>
            </div>
          </div>
        </div>

        {/* Grid 2x2: YT | Blog / Curso | LanceiHub */}
        <div className="canais-grid">
          {canais.map((c) => (
            <Card key={c.id} c={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
