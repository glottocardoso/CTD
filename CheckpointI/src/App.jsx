import { useState } from 'react';
import './App.css';
import CardComponent from './Components/Card/CardComponent';
import InputComponent from './Components/Input/InputComponent';
import CardListComponent from "./Components/Card/CardListComponent"


function App() {

  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [input1, setInput1] = useState(false)
  const [input2, setInput2] = useState(false)

  const [card, setCard] = useState({});
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

    if (title.length >= 3 && imgUrl.length>=6){
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

  //Validações
  const input1Validator = () => {
      
      if (title.length >= 3) { 
          setInput1(true);
      } else {
          setInput1(false);
      }
  }

  const input2Validator = () => {

    if (imgUrl.length >= 6) {
        setInput2(true);
    } else {
        setInput2(false);
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
                                name={carroCard.title}
                                imageUrl={carroCard.imgUrl}
                            />
                        );
                    })
                }
        </CardListComponent>

        <button onClick={handleButtonClick}>Enviar</button>

        <h4 hidden={mensagemErro} style={{color: "red"}}>Por favor, verifique os dados inseridos no formulário</h4>

      </form>

      <CardComponent
        title={card.title}
        imgUrl={card.imgUrl}
      />

    </>
  )
}

export default App