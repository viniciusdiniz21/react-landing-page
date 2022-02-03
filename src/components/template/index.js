import React from "react";
import Header from "../header";
import Background from "../template/Illustration.svg"
import Search from "../body";
import RecipePage from "../body/Recipes/recipepage";
import Services from "../body/Services/services";
import Blog from "../body/Blog/blog";
import Membership from "../body/Membership";
import Footer from "../body/footer/footer";


function Template(){
    const templateStyle = {
        backgroundImage: `url(${Background})`,
        height: "115vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        paddingTop: "15px",
    }

    return (
        <div style={templateStyle}>
            <Header></Header>
            <Search></Search>
            <RecipePage></RecipePage>
            <Services></Services>
            <Blog></Blog>
            <Membership></Membership>
            <Footer></Footer>
        </div>
    )
}

export default Template;

