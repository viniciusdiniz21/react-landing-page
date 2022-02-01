import Background from "../Membership/bloco_final_image.svg"

function Membership(){
    const membershipStyle = {
        backgroundImage: `url(${Background})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        paddingTop: "15px",
    }

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
        borderRadius: "3px",
        boxShadow: "2px 2px 8px 0px #a7df63",
        color: "white"
    }

    return (
        <div style={membershipStyle}>
            <h1 style={titleStyle}>
                Join our membership
                to get special offer
            </h1>
            <div>
                <input type='text' placeholder="Enter your email address" style={inputStyle}></input>
                <button type="submit" style={buttonStyle}>Join</button>
            </div>
        </div>
    )
}

export default Membership;