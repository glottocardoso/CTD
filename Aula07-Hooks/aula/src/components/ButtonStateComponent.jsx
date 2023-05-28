import { useState } from "react";

function ButtonStateComponent(){

    const [clicks, setClicks] = useState(0);
    
    const contadorDeClicks = () => {
        setClicks(clicks + 1)
    }

    return(
        <>
            <h4 id="clicks">Número de Clicks: {clicks}</h4>
            <button onClick={contadorDeClicks}>Clique Aqui</button>
        </>
    )

}

export default ButtonStateComponent;
