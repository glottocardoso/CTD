import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

/* Axios está instalado no projeto! 
  -> https://www.npmjs.com/package/axios
*/

/* API IBGE Endpoints:
 
-> Busca lista de UFs/estados: 
  https://servicodados.ibge.gov.br/api/v1/localidades/estados

-> Busca cidades por estado/UF: 
  https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
*/

function App() {

  //States:
  const [estados, setEstados] = useState([])
  const [cidades, setCidades] = useState([])
  const [estadoSelecionado, setEstadoSelecionado] = useState()
  const [cidadeSelecionada, setCidadeSelecionada] = useState()

  //Efeito colateral:
  useEffect(
    () => {
      buscaEstadosApi();

    }, []
  );

  useEffect(
    () => {
      buscaCidadesApi();

    }, [estadoSelecionado]

  );

  //Funções de busca:
  const buscaEstadosApi = async () => {
    console.log("Buscando estados brasileiros....");
    const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
    setEstados(
      [
      {
        id: 0,
        sigla: "Selecione"
      },    
      ...response.data
      ]
    )
  }

  const buscaCidadesApi = async () => {
    console.log("Buscando cidades brasileiras....");
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`);
    setCidades(response.data);
  }

  //Renderização:
  return (
    <>

      <div className='div-selects'>

        <h1>IBGE: Localidades</h1>

        <label>Selecione o estado</label>
        <br />
        <select
          value={estadoSelecionado} //Onde eu procuro o valor selecionado
          onChange={(e) => setEstadoSelecionado(e.target.value)}
        >
          {
            
            estados.map(estado => {
              return (
                <option
                  key={estado.id}
                  value={estado.sigla}>
                  {estado.sigla} - {estado.nome}
                </option>
              )
            })

          }
        </select>

        <br />
        <br />

        <label>Selecione a cidade</label>
        <br />
        <select
          disabled={cidades.length > 0 ? false : true}
          value={cidadeSelecionada}
          onChange={(e) => setCidadeSelecionada(e.target.value)}
        >
          {
            cidades.map(cidade => {
              return (
                <option
                  key={cidade.id}
                  value={cidade.nome}>
                  {cidade.nome}
                </option>
              )
            })
          }
          <option value="default">Selecione...</option>

        </select>

      </div>

      <div className='div-resposta'>
        <h3>Dados selecionados</h3>
        <p>Estado: {estadoSelecionado ?? "Indefinido"}</p>
        <p>Cidade: {cidadeSelecionada ?? "Indefinida"}</p>
      </div>
    </>
  )
}

export default App;