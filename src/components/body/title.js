function Titulo(props){
    const textStyle = {
        fontSize: "3.6rem",
        color: "#013064"
    }
    const subtextStyle = {
        fontSize: "1.4rem"
    }
    return(
        <>
            <h2 style={textStyle}>{props.title}</h2>
            <p style={subtextStyle}>{props.text}</p>
        </>
    )
}

export default Titulo;
