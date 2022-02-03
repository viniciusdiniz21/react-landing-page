import "./footer.css";



function Footer(){
    const margin = {
        marginRight: "30px"
    }

    return(
        <div className="footer">
            <p className="cop">© Copyrights 2019 Stack. All Rights Reserved.</p>
            <p className="terms">
                <span style={margin}>Privacy Policy</span>
                <span>Terms and Conditions</span>
            </p>
        </div>
    )
}

export default Footer;
