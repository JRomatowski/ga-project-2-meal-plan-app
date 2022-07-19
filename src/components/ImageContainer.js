
import "./Meals.css"

function ImageContainer(props) {
    return (
        <>
        <h3 id='picture-message'>{props.msg}</h3>
        <div className='double-container' >
            <div className='image-container'>
                
                <a href={props.video} target="_blank" rel="noreferrer noopener">
                    <img src={props.img} alt='food or cat'/>
                    <p id='video-announcement'>(video)</p>
                </a>
                
                <p id='recipe-instructions'>{props.instructions}</p>
            </div>
        </div>
        </>
    )
}

export default ImageContainer