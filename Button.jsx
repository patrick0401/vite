function Button(props){
    return(
        <button>{props.label ?? "Default Label"}</button>
    )
}

export default Button;