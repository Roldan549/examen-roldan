import { useState } from 'react'
import { Filtros } from './components/Filtros'
import { Resultados } from './components/Resultados'

function App() {
  const [nombre, setNombre] = useState("")

  return (
    <>
     <Filtros setNombre={setNombre}/>
     <Resultados nombre={nombre} />
    </>
  )
}

export default App
