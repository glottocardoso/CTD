import './App.css'
import InputCompnent from './components/InputComponent'

function App() {
  return (
    <>
      <form>
        <InputCompnent 
          label="Titulo" 
          type="text"
        />
        <br/>
        <br/>

        <InputCompnent 
          label="Descrição" 
          type="text"/>
        <br/>
        <br/>

        <InputCompnent 
          label="Valor"
          type= "number"
          />
        <br/>
        <br/>

        <InputCompnent 
          label="IMG URL"
          trype="url"  
        />
        <br/>
        <br/>

        <button>Salvar</button>
      </form>
    </>
  )
}

export default App
