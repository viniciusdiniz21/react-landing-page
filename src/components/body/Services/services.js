import Background from "./bloco_services.svg"
import "./services.css"

function Services () {
    const servicesStyle = {
        backgroundImage: `url(${Background})`,
        height: "112vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        paddingTop: "15px",
    }

    return(
        <div style={servicesStyle}>
            <div className="services-content">
                <h1>The best services ready To serve you</h1>
                <p>
                    Far far away, behind the word mountains, far from
                    the countries Vokalia and Consonantia, there live the
                    blind texts
                </p>
                <p>
                    Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                </p>
                <p>
                    A small river named Duden flows by their place and
                    supplies it with the necessary regelialia.
                </p>
                <button>Know More</button>
            </div>
        </div>
    )
}

export default Services;
