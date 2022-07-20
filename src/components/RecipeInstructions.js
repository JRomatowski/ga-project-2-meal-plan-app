// import {useState} from 'react'
import "./Components.css"

function RecipeInstructions(props) {

    // const [isShown, setIsShown] = useState(false);

    // const handleClick = event => {
    //     setIsShown(current => !current);
    // }

    return(
        <div className='recipe-text-box'>
            {/* Curly brackets just means JS is starting.  && means if code to left is truthy will run code to right. */}
            {/* {isShown && 
                <p id='recipe-instructions'>{props.instructions}</p>
            } */}
            {/* <button onClick={handleClick} id='show-hide-button'>Show/Hide Instructions</button> */}
            <p id='recipe-instructions'>{props.instructions}</p>
        </div>
    )
}

export default RecipeInstructions