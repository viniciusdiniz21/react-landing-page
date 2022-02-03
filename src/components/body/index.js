import "./style.css"

function Search(){

    const titleStyle = {
        color: "#013064",
        marginTop: "15%",
        fontSize: "4.2rem",
        marginLeft: "15%",
        maxWidth: "300px",
    }

    return (
        <>
            <h1 style={titleStyle} className="title">
                Ready for
                Trying a new
                recipe?
            </h1>
            <div>
                <input type='text' placeholder="Search healthy recipes" className="inputStyle"></input>
                <button type="submit" className="buttonSearch">?</button>
            </div>
        </>
    )
}

export default Search;