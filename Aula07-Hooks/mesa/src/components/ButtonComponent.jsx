import { useState } from "react";

function ButtonComponent({label}){
    
    const [lista, setLista] = useState([])
    const [contador, setContador] = useState(0)
    let array = lista

    const handleAdicionarButton = () => {
        setContador(contador +1)
        array.push(`O item ${contador} foi adicionado à lista!`) 
        setLista(array);
      }

    return(
        <>
            <button onClick={handleAdicionarButton}>{label}</button>
            <h3>Lista de itens:</h3>
            {lista.map((item, index)=>{
                return <li 
                    key={index}>
                    {item}
                </li>
            }
            )}
        </>
        
    )
}

export default ButtonComponent;
