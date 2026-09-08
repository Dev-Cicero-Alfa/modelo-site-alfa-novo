import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Filter from './components/Filter'
import Carousel from './components/Carousel'
import Destaques from './components/Destaques'
import Newsletter from './components/Newsletter'
import CanaisDivulgacao from './components/CanaisDivulgacao'
import Footer from './components/Footer'
import LotePage from './components/LotePage'
import LeiloesPage from './components/LeiloesPage'

function Home() {
  return (
    <>
      <img src="/assets/img/fundo-sp.jpg" alt="Alfa Leilões" className="home-background" />
      <Header />
      <main>
        <Filter />
        <Carousel />
        <CanaisDivulgacao />
        <Destaques />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leiloes" element={<LeiloesPage />} />
      <Route path="/lote/:id" element={<LotePage />} />
    </Routes>
  )
}

export default App
