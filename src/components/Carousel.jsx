import './Carousel.css'

// Banner oficial aprovado (novo modelo) — os textos já fazem parte da imagem.
const banner = {
  image: '/assets/img/banners/banner_cobertura_duplex_vila_guaianazes.png',
  titulo: 'Cobertura Duplex no Bairro Vila Guaianazes — São José dos Campos/SP',
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
