import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'


export default function ClaudeRecipe({recipe}) {
    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                {
                    <ReactMarkdown>{recipe}</ReactMarkdown>
                }
            </article>
        </section>
    );
}

ClaudeRecipe.propTypes = {
    recipe: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
}