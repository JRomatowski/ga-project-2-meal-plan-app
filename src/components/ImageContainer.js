function ImageContainer(props) {
    return (
        <>
        <h3>Try to cook this!</h3>
        <div className='double-container'>
            <div className='image-container'>
                <img src={props.img} alt='food'/>
            </div>
        </div>
        </>
    )
}

export default ImageContainer