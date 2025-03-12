import { useEffect, useState } from "react"

export const Resultados = ({nombre})=>{
    const [personajes,setpersonajes]= useState([])

    const obtenerdatos = async()=>{
        const respuesta = await fetch("https://rickandmortyapi.com/api/character/?name="+nombre)
        const datos = await respuesta.json()
        setpersonajes(datos.results)
    }
    useEffect(()=>{
        if(nombre!==""){
            obtenerdatos()
        }
    },[nombre])


return<>
{personajes.map((personaje,indice)=>{
    return <div key={indice}>
        <h3>{personaje.name}</h3>
        <p>{personaje.species}</p>
        <img src={personaje.image} alt="" />
    </div>
})}

</>

}