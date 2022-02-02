import Titulo from "../title";
import BlogPosts from "./blogpost";
import "./blog.css"

function Blog () {
    return(
        <div className="blog">
            <Titulo
                title="Read Our Blog"
                text="Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts"
            />
            <BlogPosts></BlogPosts>
        </div>
    )
}

export default Blog;
