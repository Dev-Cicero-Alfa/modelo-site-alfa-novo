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

      </div>
    </section>
  )
}
