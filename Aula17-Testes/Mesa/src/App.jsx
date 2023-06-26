import { useState } from 'react';
import './App.css';

function App() {

  const [texto, setTexto] = useState("")

  const fnOnClick = (event) =>{
    event.preventDefault()
    console.log("Clicou no botão")
    console.log(`Valor: ${texto}`)
  }

  const fnOnChange = (event) =>{
    setTexto(event.target.value)
  }

  return (
    <>
    <form>
      <h1>Projeto modelo</h1>
      <input type='text' value={texto} onChange={fnOnChange}></input>
      <button type='submit' onClick={fnOnClick}>Enviar</button>
    </form>
    
    </>
  )
}

export default App;