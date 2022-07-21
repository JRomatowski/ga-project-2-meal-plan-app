import "./Components.css"

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
            </div>
        </div>
        </>
    )
}

export default RecipeContainer