import {useState} from 'react'

function RecipeInstructions(props) {

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        // I do it this way so I can show and hide the stuff
        setIsShown(current => !current);
    }

    return(
        <>
        <button onClick={handleClick} id='show-hide-button'>Show/Hide Instructions</button>
        {/* I'm not sure why this works.  I thought curly brackets had to be inside something else */}
        {isShown && (
            <p id='recipe-instructions'>{props.instructions}</p>
        )}
        </>
    )
}

export default RecipeInstructions