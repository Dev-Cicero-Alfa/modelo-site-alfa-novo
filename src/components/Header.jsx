import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div id="wrapper-menu">

      {/* Barra topo: logo à esquerda + dados do usuário à direita */}
      <div id="header-form">
        <div className="container">
          <div className="header-form-container">
            <div className="logo-container">
              <a href="/"><img src="/assets/img/logo-topo.webp" alt="Alfa Leilões" /></a>
            </div>
            <div className="form-header">
              <div className="user-info">
                <p>Logado como CEGJ - TESTE</p>
                <p>CPF: 511.111.111-11</p>
              </div>
              <button className="btn-conta">MINHA CONTA</button>
              <button className="btn-sair">X SAIR</button>
            </div>
          </div>
        </div>
      </div>

      {/* Nav: links de navegação */}
      <nav id="header">
        <div className="container">
          <div id="nav">
            <div className="nav-row">
              <div className="logo-container-mobile">
                <a href="/"><img src="/assets/img/logo-alfa-leiloes.svg" alt="Alfa Leilões" /></a>
              </div>
              <button
                id="btn-mobile"
                aria-label="Abrir menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span id="hamburger" />
              </button>
            </div>
            <div id="menu" className={menuOpen ? 'open' : ''}>
              <ul className="links-wrapper">
                <li><a className="links-wrapper-item" href="#">Página Inicial</a></li>
                <li><a className="links-wrapper-item" href="#">Quem somos</a></li>
                <li><a className="links-wrapper-item" href="#">Leilões <span className="leiloes-arrow">▼</span></a></li>
                <li><a className="links-wrapper-item" href="#">Como Participar</a></li>
                <li><a className="links-wrapper-item" href="#">Faça seu leilão Conosco</a></li>
                <li className="nav-busca-item">
                  <input className="nav-busca" type="text" placeholder="Busca por palavra chave" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}
