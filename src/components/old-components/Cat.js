import "./Components.css"
import { useState, useEffect, useRef } from 'react'


function Cat() {

    const [catPhoto, setCatPhoto] = useState('')
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);

    useEffect(() => {
        const url = "https://shibe.online/api/cats"


        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {
                counter.current += 1;
                if (counter.current >= data.length) {
                    setLoading(false);
                }
                // console.log(data)
                setCatPhoto(data[0])
            })
            .catch((err) => {
                console.log(err);
            })
        }, [])

        // function handleClick() {
        //     const url = "https://shibe.online/api/cats"
        //     fetch(url)
        //         .then((res) => {
        //         return res.json()
        //     }) 
        //         .then((data) => {
        //         setCatPhoto(data[0])
        //     })
        //         .catch((err) => {
        //         console.log(err);
        //     })}
    return(
        <>
        {/* <button onClick={handleClick}>Cat friend!</button> */}
        {/* <ImageContainer img={catPhoto} msg='' id='cat-box' /> */}
        {/* <h3 id='picture-message'>"ClIcK On ReCiPeS AbOvE!!"</h3> */}
        {/* <div style={{visibility: loading ? "hidden" : "visible"}} className='double-container'>
            <div className='image-container'>
                <img src={catPhoto} alt='food or cat' id='cat-photo'/>
            </div>
        </div> */}

        <div style={{visibility: loading ? "hidden" : "visible"}} className='double-container' id='cat-double-container'>
            <div className='cat-image-container'>
                <img src={catPhoto} alt='food or cat' id='cat-photo'/>
            </div>
        </div>

        </>
    )
}

export default Cat