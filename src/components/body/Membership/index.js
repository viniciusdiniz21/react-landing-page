import Background from "../Membership/bloco_final_image.svg"
import "./membership.css"

function Membership(){
    const membershipStyle = {
        backgroundImage: `url(${Background})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        paddingTop: "15px",
    }


    const titleStyle = {
        color: "#013064",
        marginTop: "15%",
        fontSize: "4.2rem",
        marginLeft: "15%",
        maxWidth: "300px",
    }

    return (
        <div style={membershipStyle}>
            <h1 style={titleStyle}>
                Join our membership
                to get special offer
            </h1>
            <div>
                <input type='text' placeholder="Enter your email address" className="inputStyle"></input>
                <button type="submit" className="button">Join</button>
            </div>
        </div>
    )
}

export default Membership;