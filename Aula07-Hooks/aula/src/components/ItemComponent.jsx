import style from "./ItemComponent.module.css"

function ItemComponent({bimestre, ano, disciplinas}){
    return (
        <div className={style.div}>
            <h1>Bimestre {bimestre} - Ano {ano}</h1>
            <h3 className={style.h3} style={{color: "#a31b98"}}>Disciplinas</h3>
            {
                disciplinas.map((disciplina, index) => {
                    return (
                        <li key={index}> {disciplina}</li>
                    )
                })
            }
        </div>
    )
}

export default ItemComponent;
