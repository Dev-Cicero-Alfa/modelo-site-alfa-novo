import { useState, useEffect } from 'react'
import './Carousel.css'

const slides = [
  { image: '/assets/img/banners/banner_sala_consolacao_1.png', titulo: 'Sala Comercial na Consolação' },
  { image: '/assets/img/banners/banner_sala_consolacao_2.png', titulo: 'Sala Comercial na Consolação' },
  { image: '/assets/img/banners/banner_sala_consolacao_3.png', titulo: 'Sala Comercial na Consolação' },
  { image: '/assets/img/banners/banner_sala_consolacao_4.png', titulo: 'Sala Comercial na Consolação' },
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1))

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[index]

  return (
    <section id="carrossel">
      <div className="container">
        <div className="carrossel-wrapper">
          <button className="carrossel-arrow carrossel-prev" onClick={prev}>&#8249;</button>
          <button className="carrossel-arrow carrossel-next" onClick={next}>&#8250;</button>

          <div className="carrossel-slide">
            <img src={slide.image} alt={slide.titulo} />
          </div>

          <div className="carrossel-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`carrossel-dot${i === index ? ' active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
