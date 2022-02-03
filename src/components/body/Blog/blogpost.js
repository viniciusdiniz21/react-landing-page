import Imagem1 from "../Blog/blog_image_1.svg"
import Imagem2 from "../Blog/blog_image_2.svg"
import Imagem3 from "../Blog/blog_image_3.svg"
import Imagem4 from "../Blog/blog_image_4.svg"
import "./blog.css"

function TextPost(props){
    const blogTitle = {
        paddingTop: "5%",
        fontSize: "3rem",
        color: "#013064",
        maxWidth: "25vw"
    }

    const blogUsername = {
        fontSize: "1.6rem",
    }

    return(
        <div>
            <h4 style={blogTitle}>{props.title}</h4>
            <p style={blogUsername}>{props.name}</p>
        </div>
    )
}

function BlogPosts (){
    return (
        <div className="blogPost">
            <div className="post">
                <img src={Imagem1} className="image"></img>
                <TextPost
                    title="Quick-start guide to nuts and seeds"
                    name="Kevin Ibrahim"
                />

            </div>
            <div className="post">
                <img src={Imagem2} className="image"></img>
                <TextPost
                    title="Nutrition: Tips for Improving Your Health"
                    name="Mike Jackson"
                />
            </div>
            <div className="post">
                <img src={Imagem3} className="image"></img>
                <TextPost
                    title="The top 10 benefits of eating healthy"
                    name="Bryan McGregor"
                />
            </div>
            <div className="post">
                <img src={Imagem4} className="image"></img>
                <TextPost
                    title="Quick-start guide to nuts and seeds"
                    name="Jason Ibrahim"
                />
            </div>
        </div>
    )
}

export default BlogPosts;
