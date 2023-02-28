import { useState } from 'react'
import { Rutas } from './routes/Rutas'
import { Header } from './components/layout/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Header />

  <Rutas />
  
  
  </>
  )
}

export default App
