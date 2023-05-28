import ctdEtrutura from "./ctd_estrutura" //É um array de objetos literais
import ItemComponent from "./components/ItemComponent"
import "./styles.css"
import ButtonStateComponent from "./components/ButtonStateComponent"
import ButtonComponent from "./components/ButtonComponent"
import { useState } from "react"

function App() {

const [arrayFiltered, setArrayFiltered] = useState([]);

const handleFilterkButton = (ano) => {
  let array = ctdEtrutura.filter(item => item.ano.match(ano));
  setArrayFiltered(array);
}
 
  return (
    <div className="container">
      <br/>
      <br/>

      <ButtonStateComponent/>
      <br/>

      <h1 className="title">CTD - Jornada do Aluno</h1>
      <h1 className="filter">Filtrar por ano</h1>

      <ButtonComponent label="Ano 1" fnOnClick={() => handleFilterkButton(1)}/>
      <br/>
      <ButtonComponent label="Ano 2" fnOnClick={() => handleFilterkButton(2)}/>
      <br/>
      <ButtonComponent label="Ano 3" fnOnClick={() => handleFilterkButton(3)}/>
      {
        arrayFiltered.map(item => {
          return (
            <ItemComponent
              key={item.bimestre}
              {...item}
            />           
          )
        })
      }
      
    </div>
  )
}

export default App
