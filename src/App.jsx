import { useState } from 'react'
import { Rutas } from './routes/Rutas'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='layout'>
      <Rutas/>
    </div>
  )
}

export default App
