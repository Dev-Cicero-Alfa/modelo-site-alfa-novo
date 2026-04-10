import './Footer.css'

export default function Footer() {
  return (
    <>
      <section id="alfa_leiloes_footer">
        <div className="container">
          <div className="alfa_leiloes_footer-wrapper">

            {/* Col 1: Logo + Endereço */}
            <div className="footer-col-logo">
              <img src="/assets/img/logo-rodape.png" alt="Alfa Leilões" />
              <div className="list-info-localizacao">
                <p>Rua Curupacé, 260</p>
                <p>Mooca, CEP: 03120-010</p>
                <p>São Paulo/SP</p>
              </div>
            </div>

            {/* Col 2: Links */}
            <div className="footer-col-links">
              <ul>
                <li><a href="#">Quem Somos</a></li>
                <li><a href="#">Termos de Uso</a></li>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Leilões em Andamento</a></li>
                <li><a href="#">Como Participar</a></li>
                <li><a href="#">Cadastre-se</a></li>
              </ul>
            </div>

            {/* Col 3: Redes Sociais */}
            <div className="footer-col-social">
              <p className="col-label">Nos siga nas redes!</p>
              <ul className="redes-sociais">
                <li>
                  <a href="https://www.facebook.com/alfaleiloesespecialistaemimoveis/" target="_blank" rel="noreferrer">
                    <svg className="icon-footer" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/alfaleiloes/" target="_blank" rel="noreferrer">
                    <svg className="icon-footer" viewBox="0 0 24 24" style={{fill:'none',stroke:'#fff',strokeWidth:2}}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@alfaleiloes" target="_blank" rel="noreferrer">
                    <svg className="icon-footer" viewBox="0 0 24 24" style={{fill:'#fff'}}>
                      <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.2C4.6 3 3.3 3 2.2 4.2 1.3 5 1 7 1 7S.7 9.3.7 11.6v2.2C.7 16.1 1 18.4 1 18.4s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.5 22.6 12 22.6 12 22.6s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.3.3-4.5v-2.2C23.3 9.3 23 7 23 7zm-13.5 8.8V8.6l8 3.6-8 3.6z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/alfaleiloes" target="_blank" rel="noreferrer">
                    <svg className="icon-footer" viewBox="0 0 24 24" style={{fill:'none',stroke:'#fff',strokeWidth:2}}>
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <svg className="icon-footer" viewBox="0 0 24 24" style={{fill:'#fff'}}>
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contato */}
            <div className="footer-col-contato">
              <p className="col-label">Contato</p>
              <ul className="col-contato-list">
                <li>11 93207-1308</li>
                <li>11 3230-1126</li>
                <li><a href="mailto:contato@alfaleiloes.com">contato@alfaleiloes.com</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="footer-copy">
          <div className="container">
            <div className="footer-copy-wrapper">
              <p>Davi Borges de Aquino Leiloeiro - CNPJ 30.753.419/0001-85 &nbsp;&nbsp; Copyright © 2018 Alfa Leilões - Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Float Icons */}
      <div className="float-icons-wrapper">
        <div className="whatsapp">
          <a href="https://wa.me/5511932071308" target="_blank" rel="noreferrer">
            <img className="icon-float" src="/assets/img/icons-footer/whatsapp.png" alt="Whatsapp" />
          </a>
        </div>
        <div className="telegram">
          <a href="https://t.me/alfaleiloes" target="_blank" rel="noreferrer">
            <img className="icon-float" src="/assets/img/icons-footer/telegram.png" alt="Telegram" />
          </a>
        </div>
      </div>
    </>
  )
}
