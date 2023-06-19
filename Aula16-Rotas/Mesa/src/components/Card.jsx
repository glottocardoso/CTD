import React from 'react'
import { Link, Navigate } from 'react-router-dom'



const Card = ({data}) => {
  return (
   //Dica da DH: Você pode adicionar um evento de click neste componente (...para acessar a rota beer/:id)
    <div className='card'> 
        <h3>{data.name}</h3>
        <p>{data.tagline}</p>
        <img src={data.image_url} alt="beer-detail" />
        <Link to={`/beer/${data.id}`}>Details</Link>
    </div>
  )
}

export default Card