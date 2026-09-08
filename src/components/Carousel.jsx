import './Carousel.css'

// Banner oficial aprovado (variante 1) — os textos já fazem parte da imagem.
const banner = {
  image: '/assets/img/banners/banner_sala_consolacao_1.png',
  titulo: 'Sala Comercial na Consolação',
}

export default function Carousel() {
  return (
    <section id="carrossel">
      <div className="container">
        <div className="carrossel-wrapper">
          <div className="carrossel-slide">
            <img src={banner.image} alt={banner.titulo} />
          </div>
        </div>
      </div>
    </section>
  )
}
