import './App.css';
import { useState, useEffect, useReducer } from 'react';

function App() {

  const [newCarro, setNewCarro] = useState("");

  function carroReducer(state, action) {

    switch (action.type) {

      case "ADD":
        return action.payload;

      case "REMOVE":
        return state.filter(carro => carro.id != action.payload);

      default:
        return state;
    }

  }

  //LISTA:
  const [carros, dispatch] = useReducer(carroReducer, [
    {
      id: 1,
      text: "VW GOL"
    },
    {
      id: 2,
      text: "Ford Del Rey"
    },
    {
      id: 3,
      text: "Renault Scenic"
    },
    {
      id: 4,
      text: "GM Onix"
    }
  ]);

  useEffect(() => {

    const carros = localStorage.getItem("carros");

    if (carros) {

      const carrosJS = JSON.parse(carros)

      dispatch(
        {
          type: "ADD",
          payload: carrosJS
        }
      );

    }

  }, []); // Executamos 1x ao montar o componente <App />


  useEffect(() => {
    localStorage.setItem("carros", JSON.stringify(carros));
  }, [carros]); /// Executamos todas as vezes que "carros" sofrer alteração no estado

  const handleNewCarro = () => {
    if (newCarro.trim() !== '') {

      const carro = {
        id: Date.now(),/// Forma de gerar uma chave aleátoria
        text: newCarro
      };

      dispatch(
        {
          type: "ADD",
          payload: [carro, ...carros]
        }
      );

      setNewTodo("");

    } else {
      alert("Necessário informar alguma descrição");
    }
  };

  const handleRemoveCarro = (id) => {

    dispatch(
      {
        type: "REMOVE",
        payload: id
      }
    )
  };


  return (
    <div className='card'>

      <h1>Lista de Carros</h1>

      <input
        type="text"
        value={newCarro}
        onChange={event => setNewCarro(event.target.value)}
      />

      <button onClick={handleNewCarro}>Adicionar Carro</button>

      {
        carros.length > 0 ?
          carros.map(carro => (
            <div className='divTodo' key={carro.id}>

              <div className='divText'>
                {carro.text}
              </div>

              <button style={{
                backgroundColor: "#8a6df1",
                color: "#2F2D2D"
              }} onClick={() => handleRemoveCarro(carro.id)}>Remover
              </button>

            </div>
          ))
          : <h3>A lista de carros está vazia</h3>
      }

    </div>
  );
}

export default App;