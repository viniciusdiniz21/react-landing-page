import Imagem1 from "../Blog/blog_image_1.svg"
import Imagem2 from "../Blog/blog_image_2.svg"
import Imagem3 from "../Blog/blog_image_3.svg"
import Imagem4 from "../Blog/blog_image_4.svg"
import "./blog.css"

function TextPost(props){

    return(
        <div>
            <h4>{props.title}</h4>
            <p>{props.name}</p>
        </div>
    )
}

function BlogPosts (){
    return (
        <div className="blogPost">
            <div className="post">
                <img src={Imagem1}></img>
                <TextPost
                    title="Quick-start guide to nuts and seeds"
                    name="Kevin Ibrahim"
                />

            </div>
            <div className="post">
                <img src={Imagem2}></img>
                <TextPost
                    title="Nutrition: Tips for Improving Your Health"
                    name="Mike Jackson"
                />
            </div>
            <div className="post">
                <img src={Imagem3}></img>
                <TextPost
                    title="The top 10 benefits of eating healthy"
                    name="Bryan McGregor"
                />
            </div>
            <div className="post">
                <img src={Imagem4}></img>
                <TextPost
                    title="Quick-start guide to nuts and seeds"
                    name="Jason Ibrahim"
                />
            </div>
        </div>
    )
}

export default BlogPosts;
