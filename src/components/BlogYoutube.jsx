import './BlogYoutube.css'

const posts = [
  {
    id: 1,
    tag: 'Dicas',
    titulo: 'Como arrematar um imóvel em leilão judicial com segurança',
    resumo: 'Entenda os principais cuidados antes de dar um lance: matrícula, débitos, ocupação e condições de venda.',
    data: '10 Abr 2026',
    img: '/assets/img/blog/post1.jpg',
  },
  {
    id: 2,
    tag: 'Mercado',
    titulo: 'Imóveis em leilão chegam a 60% de desconto: vale a pena?',
    resumo: 'Analisamos os melhores casos de arrematação e como identificar verdadeiras oportunidades no mercado.',
    data: '05 Abr 2026',
    img: '/assets/img/blog/post2.jpg',
  },
  {
    id: 3,
    tag: 'Jurídico',
    titulo: 'Diferença entre leilão judicial e extrajudicial: o que muda para o comprador',
    resumo: 'Cada modalidade tem regras específicas. Veja o que você precisa saber antes de participar.',
    data: '01 Abr 2026',
    img: '/assets/img/blog/post3.jpg',
  },
]

export default function BlogYoutube() {
  return (
    <section className="blog-yt-section">
      <div className="container">

        {/* Blog */}
        <div className="blog-yt-header">
          <h2 className="blog-yt-title">📰 Blog Alfa Leilões</h2>
          <a className="blog-yt-ver-mais" href="#">Ver todos os artigos →</a>
        </div>
        <div className="blog-cards-grid">
          {posts.map((post) => (
            <a key={post.id} className="blog-card" href="#">
              <div className="blog-card-img-wrap">
                <img
                  src={post.img}
                  alt={post.titulo}
                  onError={(e) => { e.target.src = '/assets/img/placeholder-image.webp' }}
                />
                <span className="blog-card-tag">{post.tag}</span>
              </div>
              <div className="blog-card-body">
                <p className="blog-card-date">{post.data}</p>
                <h3 className="blog-card-titulo">{post.titulo}</h3>
                <p className="blog-card-resumo">{post.resumo}</p>
              </div>
            </a>
          ))}
        </div>

        {/* YouTube */}
        <div className="blog-yt-header" style={{ marginTop: '2.5rem' }}>
          <h2 className="blog-yt-title">▶ Canal no YouTube</h2>
          <a
            className="blog-yt-ver-mais"
            href="https://www.youtube.com/@alfaleiloes1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar canal →
          </a>
        </div>
        <div className="yt-banner">
          <div className="yt-banner-text">
            <p className="yt-banner-desc">
              Assista dicas exclusivas, tours por imóveis e transmissões ao vivo dos nossos leilões.
              Inscreva-se e ative o sininho para não perder nenhum conteúdo!
            </p>
            <a
              className="yt-btn"
              href="https://www.youtube.com/@alfaleiloes1"
              target="_blank"
              rel="noopener noreferrer"
            >
              ▶ Inscreva-se no Canal
            </a>
          </div>
          <div className="yt-banner-video">
            <iframe
              src="https://www.youtube.com/embed/GXs3ahm3gZY"
              title="Canal Alfa Leilões"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* WhatsApp */}
        <div className="blog-yt-header" style={{ marginTop: '2.5rem' }}>
          <h2 className="blog-yt-title">💬 Canal no WhatsApp</h2>
          <a
            className="blog-yt-ver-mais"
            href="https://whatsapp.com/channel/0029VbBJiIwBPzjf9zVN2t3X"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar canal →
          </a>
        </div>
        <div className="wa-banner">
          <div className="wa-banner-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
              <circle cx="16" cy="16" r="16" fill="#25D366"/>
              <path d="M23.5 8.5C21.6 6.6 19.1 5.5 16.4 5.5C10.9 5.5 6.4 10 6.4 15.5C6.4 17.3 6.9 19.1 7.8 20.6L6.3 26L11.8 24.5C13.3 25.3 14.8 25.7 16.4 25.7C21.9 25.7 26.4 21.2 26.4 15.7C26.4 13 25.4 10.4 23.5 8.5ZM16.4 23.9C14.9 23.9 13.5 23.5 12.2 22.8L11.9 22.6L8.7 23.5L9.6 20.4L9.4 20.1C8.6 18.8 8.2 17.2 8.2 15.5C8.2 11 11.9 7.3 16.4 7.3C18.6 7.3 20.6 8.1 22.1 9.7C23.7 11.2 24.5 13.3 24.5 15.5C24.6 20.1 20.9 23.9 16.4 23.9ZM20.9 17.6C20.6 17.5 19.2 16.8 19 16.7C18.7 16.6 18.6 16.6 18.4 16.9C18.2 17.2 17.7 17.8 17.6 18C17.4 18.2 17.3 18.2 17 18.1C15.5 17.3 14.5 16.7 13.5 15C13.3 14.7 13.6 14.7 13.9 14.1C14 13.9 13.9 13.8 13.9 13.6C13.8 13.4 13.3 12 13.1 11.5C12.9 11 12.7 11 12.5 11H12C11.8 11 11.4 11.1 11.1 11.4C10.8 11.7 10.1 12.4 10.1 13.8C10.1 15.2 11.1 16.5 11.3 16.7C11.4 16.9 13.3 19.8 16.2 21C18 21.7 18.7 21.8 19.6 21.6C20.1 21.5 21.3 20.9 21.6 20.2C21.8 19.5 21.8 18.9 21.7 18.8C21.6 18.6 21.2 18.5 20.9 17.6Z" fill="white"/>
            </svg>
          </div>
          <div className="wa-banner-text">
            <h3 className="wa-banner-title">Receba novidades em primeira mão!</h3>
            <p className="wa-banner-desc">
              Fique por dentro dos melhores leilões, datas de abertura e oportunidades exclusivas.
              Entre para o nosso canal e não perca nenhum imóvel.
            </p>
            <a
              className="wa-btn"
              href="https://whatsapp.com/channel/0029VbBJiIwBPzjf9zVN2t3X"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Entrar no Canal
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
