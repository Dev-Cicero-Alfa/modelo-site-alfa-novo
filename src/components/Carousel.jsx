import { useState, useEffect } from 'react'
import './Carousel.css'

const slides = [
  { location: 'Bertioga - SP',       image: '/assets/img/banners/Casa em Bertioga (SP).png',          titulo: 'Casa em Bertioga (SP)'          },
  { location: 'Anaurilândia - MS',   image: '/assets/img/banners/Fazenda em Anaurilândia (MS).png',   titulo: 'Fazenda em Anaurilândia (MS)'   },
  { location: 'Paranatinga - MT',    image: '/assets/img/banners/Fazenda em Paranatinga (MT).png',    titulo: 'Fazenda em Paranatinga (MT)'    },
  { location: 'Perdizes - MG',       image: '/assets/img/banners/Fazenda em Perdizes (MG).png',       titulo: 'Fazenda em Perdizes (MG)'       },
  { location: 'Itaquiraí - MS',      image: '/assets/img/banners/Hotel em Itaquiraí (MS).png',        titulo: 'Hotel em Itaquiraí (MS)'        },
  { location: 'Itupeva - SP',        image: '/assets/img/banners/Terreno em Itupeva (SP).png',        titulo: 'Terreno em Itupeva (SP)'        },
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
