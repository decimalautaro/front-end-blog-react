import { useState } from 'react'
import { Rutas } from './routes/Rutas'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Header />

  <Rutas />



  <Footer/>
  </>
  )
}

export default App
