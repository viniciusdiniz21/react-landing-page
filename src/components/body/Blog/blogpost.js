import Imagem1 from "../Blog/blog_image_1.svg"
import Imagem2 from "../Blog/blog_image_2.svg"
import Imagem3 from "../Blog/blog_image_3.svg"
import Imagem4 from "../Blog/blog_image_4.svg"


function BlogPosts (){
    return (
        <>
            <div>
                <img src={Imagem1}></img>
                <h2>Quick-start guide to nuts and seeds</h2>
                <p>Kevin Ibrahim</p>
            </div>
            <div>
                <img src={Imagem2}></img>
                <h2>Nutrition: Tips for Improving Your Health</h2>
                <p>Mike Jackson</p>
            </div>
            <div>
                <img src={Imagem3}></img>
                <h2>The top 10 benefits of eating healthy</h2>
                <p>Bryan McGregor</p>
            </div>
            <div>
                <img src={Imagem4}></img>
                <h2>Quick-start guide to nuts and seeds</h2>
                <p>Jason Ibrahim</p>
            </div>
        </>
    )
}

export default BlogPosts;
