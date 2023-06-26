import { useState, useReducer, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import ServiceCard from './components/ServiceCard';

import ServiceContext from "./contexts/ServiceContext";


function servicesReducer(state, action) {

  switch (action.type) {

    case "ADD_SERVICE":
      return action.payload;

    case "REMOVE_SERVICE":
      return state.filter(service => service.id != action.payload);

    default:
      return state;
  }

}

function App() {

  const serviceDefaultValues = {
    id: 3423345,
    type: "Verificar sinal Wi-Fi",
    time: "40 minutos"
  };

  const [services, dispatch] = useReducer(servicesReducer, [serviceDefaultValues])

useEffect(() => {
  const services = localStorage.getItem("services");

  if (services) {
    const servicesJS = JSON.parse(services)

    dispatch(
      {
        type: "ADD_SERVICE",
        payload: servicesJS
      }
    );
  }

}, [])

useEffect(()=>{
  localStorage.setItem("services", JSON.stringify(services));
}, [services])

  return (

    <ServiceContext.Provider value={{ services, dispatch }}>

      <div className='card'>

        <h1>Novo atendimento</h1>

        <Form />

        <h1>Seus atendimentos</h1>

        {
          services.length > 0 ?
            services.map(service =>
            (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))
            : <h3> A lista de atendimentos está vazia</h3>
        }

      </div>

    </ServiceContext.Provider>

  );
}

export default App;