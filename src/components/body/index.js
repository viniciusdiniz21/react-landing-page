function Search(){
    const inputStyle = {
        border: "1px solid black",
        borderRadius: "5px",
        fontFamily: "Arial",
        color: "grey",
        fontSize: "12px",
        background: "#ffffff",
        padding: "10px 20px 10px 20px",
        textDecoration: "none",
        marginLeft: "15%",
    }

    const titleStyle = {
        color: "#001f36",
        marginTop: "15%",
        fontSize: "42px",
        marginLeft: "15%",
        maxWidth: "300px",
    }

    const buttonStyle = {
        width: "32px",
        height: "32px",
        backgroundColor: "#a7df63",
        cursor: "pointer",
        marginLeft: "6px",
        borderRadius: "3px"
    }

    return (
        <>
            <h1 style={titleStyle}>
                Ready for
                Trying a new
                recipe?
            </h1>
            <div>
                <input type='text' placeholder="Search healthy recipes" style={inputStyle}></input>
                <button type="submit" style={buttonStyle}>?</button>
            </div>
        </>
    )
}

export default Search;