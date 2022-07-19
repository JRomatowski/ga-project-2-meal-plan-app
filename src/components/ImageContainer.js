
import "./Meals.css"

function ImageContainer(props) {
    return (
        <>
        <h3 id='picture-message'>{props.msg}</h3>
        <div className='double-container' >
            <div className='image-container'>
                <img src={props.img} alt='food or cat'/>
            </div>
        </div>
        </>
    )
}

export default ImageContainer