import Titulo from "../title";
import BlogPosts from "./blogpost";

function Blog () {
    return(
        <>
            <Titulo
                title="Read Our Blog"
                text="Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts"
            />
            <BlogPosts></BlogPosts>
        </>
    )
}

export default Blog;
