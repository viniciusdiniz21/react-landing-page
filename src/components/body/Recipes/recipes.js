import RecipeBox from "./recipebox";
import Comida1 from "./comida_1.svg"
import Comida2 from "./comida_2.svg"
import Comida3 from "./comida_3.svg"
import Comida4 from "./comida_4.svg"
import "./recipes.css"

const Recipes = () => {
    return(
        <div className="box">
            <div className="boxItems">
                <img className="boxImage" src={Comida1}/>
                <RecipeBox
                title="Broccoli Salad with Bacon"
                />
            </div>
            <div className="boxItems">
                <img className="boxImage" src={Comida2}/>
                <RecipeBox
                title="Classic Beef Burguers"
                />
            </div>
            <div className="boxItems">
                <img className="boxImage" src={Comida3}/>
                <RecipeBox
                title="Classic Potato Salad"
                />
            </div>
            <div className="boxItems">
                <img className="boxImage" src={Comida4}/>
                <RecipeBox
                title="Cherry Cobbler on the Grill"
                />
            </div>
        </div>
    );
}

export default Recipes;
