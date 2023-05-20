function InputCompnent(props){
    return(
    <>
        <label htmlFor={props.label}>{props.label}</label>
        <br/>
        <input type={props.type} />
        
    </>
    );
}

export default InputCompnent;