import "./style.css"

function Menu(){
    const menuStyle = {
        display: "flex",
        flexWrap: "wrap",
    }

    const aStyle = {
        color: "white",
        fontSize: "12px",
        marginRight: "24px"
    }

    return (
        <div>
            <div className="menu-toggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
            </div>
            <nav style={menuStyle} className="hidden">
                <a style={aStyle} href="http://localhost:3000">HEALTHY RECIPES</a>
                <a style={aStyle} href="http://localhost:3000">BLOG</a>
                <a style={aStyle} href="http://localhost:3000">JOIN</a>
                <a href="http://localhost:3000/register"><button className="buttonStyleMenu">Register</button></a>
            </nav>
        </div>

    )
}

export default Menu