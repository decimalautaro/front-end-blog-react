import { useState } from 'react'
import { Rutas } from './routes/Rutas'
import { Header } from './components/layout/Header'
import { Nav } from './components/layout/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Header />
  <Nav />
  <Rutas />
  
  
  </>
  )
}

export default App
