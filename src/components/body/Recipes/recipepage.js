import Titulo from "../title";
import Recipes from "./recipes";

function RecipePage () {
    return (
        <div>
            <Titulo 
                title="Our Best Recipes" 
                text="Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts."
            />
            <Recipes></Recipes>
        </div>
    )
}

export default RecipePage;
