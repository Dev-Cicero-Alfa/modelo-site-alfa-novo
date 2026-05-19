import './BlogYoutube.css'

export default function BlogYoutube() {
  return (
    <section className="blog-yt-section">
      <div className="container">

        {/* YouTube */}
        <div className="blog-yt-header">
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
