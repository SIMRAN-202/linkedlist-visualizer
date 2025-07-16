import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Learn } from './pages/Learn.jsx'
import  Visualizer from './pages/Visualizer.jsx'
import { Footer } from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/visualizer" element={<Visualizer />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
