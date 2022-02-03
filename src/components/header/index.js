import React from "react";
import Menu from "../menu";
import "./style.css"

function Header(){
    const headerStyle = {
        color: "#6bbc61",
        maxWidth: "1100",
        height: "42px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "spaceBetween",
        alingItems: "center",
        fontWeight: "500"
    };

    const logoStyle = {
        //cor verde claro
        color: "#a7df63",
        fontWeight: "700",
        fontSize: "3.2rem"
    }

    return(
        <header style={headerStyle}>
            <div style={logoStyle} className="title">Healthy Food</div>
            <Menu></Menu>
        </header>
    )
}

export default Header;