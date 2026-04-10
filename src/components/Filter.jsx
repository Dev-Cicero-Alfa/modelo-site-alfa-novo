import './Filter.css'

export default function Filter() {
  return (
    <section id="filter">
      <div className="container">
        <div className="home-content">
          <h1 className="title">ENCONTRE SEU IMÓVEL AQUI</h1>
        </div>

        <div className="filter-dropdowns">
          {['Categorias', 'Estado', 'Cidade', 'Bairro', 'Faixa de Preço'].map((f) => (
            <div className="select-wrapper" key={f}>
              <select>
                <option>{f}</option>
              </select>
            </div>
          ))}
        </div>

        <div className="filter-tipos-row">
          <span className="filter-tipos-label">Tipos de Leilões:</span>
          <div className="filter-tipos-options">
            <label><input type="radio" name="tipo" defaultChecked /> Todos os Leilões</label>
            <label><input type="radio" name="tipo" /> TJ e Extrajudicial</label>
            <label><input type="radio" name="tipo" /> Justiça Trabalhista</label>
          </div>
          <button className="button_filter">Buscar</button>
        </div>
      </div>
    </section>
  )
}
