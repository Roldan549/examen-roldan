import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Filtros } from './components/Filtros'

function App() {
  const [nombre, setNombre] = useState("")

  return (
    <>
     <Filtros setNombre={setNombre}/>
    </>
  )
}

export default App
