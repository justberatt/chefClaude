import React from 'react'
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';

const Main = () => {
    const [ ingredients, setIngredients ] = React.useState([]);

    const [recipeShown, setRecipeShown] = React.useState(false)
    const handleGetRecipeClick = () => {
        setRecipeShown(true)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient") // "ingredient" is the 'name' attr. in the form
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label='Add ingredient'
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {
                ingredients.length > 0 &&
                <IngredientsList ingredients={ingredients} handleGetRecipeClick={handleGetRecipeClick}/>
            }
            {
                recipeShown &&
                <ClaudeRecipe />
            }
        </main>
    )
}

export default Main