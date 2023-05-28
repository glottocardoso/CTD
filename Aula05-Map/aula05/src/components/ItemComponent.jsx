import style from "./ItemComponent.module.css"

function ItemComponent({bimestre, ano, disciplinas}){
    return (
        <div>
            <h1 style={{
                color: "red"
            }}>Bimestre {bimestre} - Ano {ano}</h1>
            <h3 className={style.h3}>Disciplinas</h3>
            {disciplinas.map((disciplina, index) => {
                return (
                    <p
                    key={index}>
                    {disciplina}
                    </p>
                )
            })}
        </div>
    )
}

export default ItemComponent
