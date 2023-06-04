function TabelaCompnent(props){
    return(
        <div className="container">
            <table border="1" className="line_title">
            <thead>
                <tr>
                <th>Disciplina</th>
                <th>Quantidade de Alunos</th>
                <th>Média das notas dos alunos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Banco de Dados</td>
                <td>{props.qtdBancoDeDados}</td>
                <td>{props.mediaBancoDeDados}</td>
                </tr>

                <tr>
                <td>Desenvolvimento Frontend</td>
                <td>{props.qtdFrontEnd}</td>
                <td>{props.mediaFrontEnd}</td>
                </tr>

                <tr>
                <td>Desenolvimento Backend</td>
                <td>{props.qtdBackEnd}</td>
                <td>{props.mediaBackEnd}</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default TabelaCompnent;
