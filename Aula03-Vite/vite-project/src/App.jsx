import './App.css'

const usuario = {
  nome: "Marcos",
  sobrenome: "Martins"
}

const OlaMundo = () =>{
  return (
    <>
      <h3>Olá Mundo</h3>
    </>
  )
}

const BoasVindasUsuario = () =>{
  return (
    <p>Seja bem-vindo usuário {usuario.nome} {usuario.sobrenome}</p>
  )
}

function App() {
  return (
  <>
    <OlaMundo />
    <BoasVindasUsuario />
  </>
  )
}

export default App
