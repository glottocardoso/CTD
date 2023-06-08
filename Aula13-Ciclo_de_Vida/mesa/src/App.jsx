import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [pedidoStatus, setPedidoStatus] = useState("Ativo");

  useEffect(
    ()=>{
      setTimeout(()=>{console.log("O componente foi atualizado!")},2000)

    }
    ,[pedidoStatus]

  )

  const cancelarPedido = () => {
    alert("Seu pedido foi cancelado")
    setPedidoStatus("Cancelado")
  }

  return (
    <>
      <h2>Status do pedido: {pedidoStatus}</h2>
      <button onClick={cancelarPedido}
      >{pedidoStatus == "Ativo" ? "Cancelar pedido" : "Pedido cancelado"}</button>
    </>
  )
}

export default App