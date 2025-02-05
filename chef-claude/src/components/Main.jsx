import React from 'react'

const Main = () => {
    const [ ingredients, setIngredients ] = React.useState([]);

    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient") // "ingredient" is the 'name' attr. in the form
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label='Add ingredients'
                    name="ingredient"
                />
                <button>Add ingredients</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}

export default Main