import "./Components.css"
// import {useState} from 'react'
import RecipeInstructions from "./RecipeInstructions"

function RecipeContainer(props) {

    return (
        <>
        <h3 id='picture-message'>{props.msg}</h3>
        <div className='double-container' >
            <div className='recipe-container'>              
                <a href={props.video} target="_blank" rel="noreferrer noopener">
                    <img src={props.img} alt='food or cat'/>
                    <p id='video-announcement'>(video)</p>                    
                </a>
                <RecipeInstructions
                    instructions={props.instructions}
                    />
            </div>
        </div>
        </>
    )
}

export default RecipeContainer