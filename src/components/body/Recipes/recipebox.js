import "./recipes.css"

function RecipeBox (props){

    return(
        <div>
            <h3 className="recipeTitle">{props.title}</h3>
            <button className="buttonRecipe">See Recipe</button>
        </div>
    )
}

export default RecipeBox;
