function Menu(){
    const menuStyle = {
        display: "flex",
        flexWrap: "wrap"
    }

    const aStyle = {
        color: "white",
        fontSize: "12px",
        marginRight: "24px"
    }

    const buttonStyle = {
        borderRadius: "5px",
        fontFamily: "Arial",
        color: "#a7df63",
        fontSize: "16px",
        background: "#ffffff",
        padding: "10px 20px 10px 20px",
        textDecoration: "none",
        cursor: "pointer"
    }

    return (
        <nav style={menuStyle}>
            <a style={aStyle} href="#">HEALTHY RECIPES</a>
            <a style={aStyle} href="#">BLOG</a>
            <a style={aStyle} href="#">JOIN</a>
            <button style={buttonStyle}>Register</button>
        </nav>
    )
}

export default Menu