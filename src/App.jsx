import { useState } from 'react'
import {Article} from './components/pages/Article'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1>Blog con react</h1>
  <Article/>
  
  
  </>
  )
}

export default App
