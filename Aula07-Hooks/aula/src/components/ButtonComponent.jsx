import style from "./ButtonComponent.module.css";

function ButtonComponent({label, fnOnClick}){
    return (
        <button className={style.btn} onClick={fnOnClick}>{label}</button>
    )
}

export default ButtonComponent;
