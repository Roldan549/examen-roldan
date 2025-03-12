import { useRef, useState } from "react"

export const Filtros = ({setNombre})=>{

    const inputRef= useRef()

    return<>
    <h1>Buscar Personajes de Rick y Morty</h1>
    <input type="text" ref={inputRef} />
    <button onClick={()=>{setNombre(inputRef.current.value)}}>Buscar</button>

    </>

}