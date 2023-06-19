import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { useParams, useNavigate } from 'react-router-dom'

//Esta página irá renderizar cada bebida individualmente

const Beer = () => {
    const [beer, setBeer] = useState([])

    const params = useParams();
    const navigate = useNavigate();

    const beerIdParam = params.id;

    
    const getBeer = async()=>{
        
        //Você deve completar esta busca com o parâmetro necessário
        const res = await axios(`https://api.punkapi.com/v2/beers/${beerIdParam}`)
        console.log(beerIdParam)
        console.log(res)
        setBeer(res.data[0])
    }

    useEffect(()=>{
        getBeer()
    }, [])
    
  
  
  return (
    <div>
        <h2>Cerveja número: ?</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <button onClick={()=> navigate(-1)}>Voltar</button>
    </div>

  )
}

export default Beer