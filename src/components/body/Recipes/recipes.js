import RecipeBox from "./recipebox";
import Comida1 from "./comida_1.svg"
import Comida2 from "./comida_2.svg"
import Comida3 from "./comida_3.svg"
import Comida4 from "./comida_4.svg"

const Recipes = () => {
    return(
        <>
            <div>
                <img src={Comida1}/>
                <RecipeBox
                title="Broccoli Salad with Bacon"
                />
            </div>
            <div>
                <img src={Comida2}/>
                <RecipeBox
                title="Classic Beef Burguers"
                />
            </div>
            <div>
                <img src={Comida3}/>
                <RecipeBox
                title="Classic Potato Salad"
                />
            </div>
            <div>
                <img src={Comida4}/>
                <RecipeBox
                title="Cherry Cobbler on the Grill"
                />
            </div>
        </>
    );
}

export default Recipes;
