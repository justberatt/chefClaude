import React from 'react'
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromMistral } from "../ai"

const Main = () => {
    const [ ingredients, setIngredients ] = React.useState([])
    const [recipe, setRecipe] = React.useState('') // Store the AI-gnerated recipe

    const getRecipe = async () => {
        if(ingredients.length < 4) return // Ensure enough ingredients
        try{
            const fetchedRecipe = await getRecipeFromMistral(ingredients)
            setRecipe(fetchedRecipe || "Failed to fetch recipe.")
        } catch (error) {
            console.error("Error fetching recipe:", error);
            setRecipe("Error fetching recipe. Please try again.");
        }
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
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>
            }
            { recipe &&  <ClaudeRecipe recipe={recipe} /> }
        </main>
    )
}

export default Main