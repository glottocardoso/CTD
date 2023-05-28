import ctdEtrutura from "./ctd_estrutura" //É um array de objetos literais
import ItemComponent from "./components/ItemComponent"
import "./styles.css"

function App() {

  return (
    <div className="container">
      <h1 className="title">CTD - Jornada do Aluno</h1>

      {
        ctdEtrutura.map(item => {
          return (
            <ItemComponent
              key={item.bimestre}
              bimestre = {item.bimestre}
              ano = {item.ano}
              disciplinas = {item.disciplinas}
            />           
          )
        })
      }
      
    </div>
  )
}

export default App
