import { useState } from 'react';
import './App.css';
import CardComponent from './Components/Card/CardComponent';
import InputComponent from './Components/Input/InputComponent';
import CardListComponent from "./Components/Card/CardListComponent"


function App() {

  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [mensagemErro, setMensagemErro] = useState(false)
  const [carroList, setCarroList] = useState([]);


  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangeImgUrl = (event) => {
    setImgUrl(event.target.value)
  }

  const handleButtonClick = (event) => {

    event.preventDefault()
    
    const hasNumber = (texto) =>{
      return texto.trim().split("").some((caractere)=>{
        if (isNaN(parseInt(caractere))){
          console.log("entrei no falso")
          return false;
          
        }else{
          console.log("entrei no true")
        return true;
      }})
    };
    
    if (title.trim().length >= 3 && imgUrl.length>=6 && hasNumber(imgUrl)){
      setCarroList(
        [
            ...carroList, 
            { 
                title: title,
                imgUrl: imgUrl
            }
        ]
      )
      setMensagemErro(false)
    }else{
      setMensagemErro(true)
    }

  }

  return (
    <>
      <h2>Carros.com</h2>

      <form>

        <InputComponent
          title="Nome do carro"
          type="text"
          value={title}
          fnOnChange={handleChangeTitle}

        />

        <InputComponent
          title="Img URL"
          type="url"
          value={imgUrl}
          fnOnChange={handleChangeImgUrl}
        />

        <CardListComponent>
                {
                    carroList.map(carroCard => {
                        return (
                            <CardComponent
                                key={carroCard.title}
                                title={carroCard.title}
                                imgUrl={carroCard.imgUrl}
                            />
                        );
                    })
                }
        </CardListComponent>

        <button onClick={handleButtonClick}>Enviar</button>

        <h4 hidden={!mensagemErro} style={{color: "red"}}>Por favor, verifique os dados inseridos no formulário</h4>

      </form>

    </>
  )
}

export default App