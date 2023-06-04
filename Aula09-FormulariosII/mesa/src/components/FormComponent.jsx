import { useState } from "react";
import TabelaComponent from "./TabelaComponent";

function FormComponent(){

    const [materiaSelecionada, setMateriaSelecionada] = useState("")
    const [notaDigitada, setNotaDigitada] = useState()

    const [mediaBancoDeDados, setMediaBancoDeDados] = useState(0)
    const [notasBancoDeDados, setNotasBancoDeDados] = useState([])
    const [qtdBancoDeDados, setQtdBancoDeDados] = useState(0)

    const [mediaBackEnd, setMediaBackEnd] = useState(0)
    const [notasBackEnd, setNotasBackEnd] = useState([])
    const [qtdBackEnd, setQtdBackEnd] = useState(0)

    const [mediaFrontEnd, setMediaFrontEnd] = useState(0)
    const [notasFrontEnd, setNotasFrontEnd] = useState([])
    const [qtdFrontEnd, setQtdFrontEnd] = useState(0)

    const [mediaDevOps, setMediaDevOps] = useState(0)
    const [notasDevOps, setNotasDevOps] = useState([])
    const [qtdDevOps, setQtdDevOps] = useState(0)

    const [formValid, setFormValid] = useState(false)
    
    function handleSubmit(event) {
        event.preventDefault();
        
    }
    
    const handleOptionSelection = (event) =>{
        setMateriaSelecionada(event.target.value)
    }

    const handleGradeTyping = (event) =>{
        let valorDigitado = parseFloat(event.target.value)
        if (!isNaN(valorDigitado) && valorDigitado<=10 && valorDigitado>=0 && materiaSelecionada!="" && valorDigitado!=null){
            setNotaDigitada(valorDigitado)
            setFormValid(true)
        } else {
            console.log(valorDigitado)
            setFormValid(false)
        }       

    }


  
    const calcularMedia = (array, novoValor, fnSetMedia, fnSetNotas) =>{
        let arrayNotas = array
        arrayNotas.push(novoValor)
        fnSetNotas(arrayNotas)

        const sum = arrayNotas.reduce(add, 0);
        
        function add(accumulator, a) {
            return accumulator + a;
        }
        
        console.log(sum/(arrayNotas.length))
        fnSetMedia(sum/(arrayNotas.length));
    }

    const calcularQtd = (array, fnQtd) =>{
        fnQtd(array.length)
    }    

    function handleClickButton() {
        switch (materiaSelecionada){           
            case "database":
                calcularMedia(notasBancoDeDados, notaDigitada,setMediaBancoDeDados, setNotasBancoDeDados)
                calcularQtd(notasBancoDeDados, setQtdBancoDeDados)
                break;
            case "backend":
                calcularMedia(notasBackEnd, notaDigitada,setMediaBackEnd, setNotasBackEnd)
                calcularQtd(notasBackEnd, setQtdBackEnd)
                break;
            case "frontend":
                calcularMedia(notasFrontEnd, notaDigitada,setMediaFrontEnd, setNotasFrontEnd)
                calcularQtd(notasFrontEnd, setQtdFrontEnd)
                break;
            case "devops":
                calcularMedia(notasDevOps, notaDigitada, setMediaDevOps, setNotasDevOps)
                calcularQtd(notasDevOps, setQtdDevOps)
                break;             
        }       
    }
    return(
    <>
        <form className="form" onSubmit={handleSubmit}>
            <div className="container_input">
            <select onChange={handleOptionSelection}>
                <option selected disabled>
                Selecione uma disciplina
                </option>
                <option value="database">Banco de Dados</option>
                <option value="backend">Desenvolvimento Backend</option>
                <option value="frontend">Desenvolvimento Frontend</option>
                <option value="devops">Devops</option>
            </select>
            <input onKeyUp={handleGradeTyping} type="number" />
            </div>
            <input disabled={!formValid} type="submit" value="Salvar" onClick={handleClickButton}/>
        </form>
        <TabelaComponent 
            mediaBancoDeDados={mediaBancoDeDados} qtdBancoDeDados={qtdBancoDeDados} 
            mediaBackEnd={mediaBackEnd} qtdBackEnd={qtdBackEnd} 
            mediaFrontEnd={mediaFrontEnd} qtdFrontEnd={qtdFrontEnd}
            mediaDevOps={mediaDevOps} qtdDevOps={qtdDevOps}
            />
    </>
    )
}

export default FormComponent;
