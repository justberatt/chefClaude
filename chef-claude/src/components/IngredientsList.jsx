import PropTypes from 'prop-types'
import { forwardRef } from 'react'

const IngredientsList = forwardRef(({ingredients, getRecipe}, ref) => {
    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>
            {
                ingredients.length >= 4 && <div className="get-recipe-container">
                <div ref={ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={getRecipe}>Get a recipe</button>
            </div>
            }
        </section>
    )
})

IngredientsList.displayName = "IngredientsList"; //Added this to stop the ESLint errors

IngredientsList.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    getRecipe: PropTypes.func.isRequired,
}

export default IngredientsList