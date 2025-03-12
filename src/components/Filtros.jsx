import { useRef, useState } from "react"

export const Filtros = ({setNombre})=>{

    const inputRef= useRef()

    return<>

    <input type="text" ref={inputRef} />
    <button onClick={()=>{setNombre(inputRef.current.value)}}>Buscar</button>

    </>

}