import { useState, useEffect } from 'react';
import "./Components.css"
import ImageContainer from './RecipeContainer';

// IMPORT DOSAS HERE

function Breakfast() {

    const message = "Rise and shine!"
    const [breakfastPhoto, setBreakfastPhoto] = useState('')

    useEffect(() => {
        const url = "https://foodish-api.herokuapp.com/api/images/dosa"
        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {
                console.log(data)
                setBreakfastPhoto(data.image)
            })
            .catch((err) => {
                console.log(err);
            })
        },[])

        function handleClick() {
            const url = "https://foodish-api.herokuapp.com/api/images/dosa"
            fetch(url)
                .then((res) => {
                return res.json()
            }) 
                .then((data) => {
                setBreakfastPhoto(data.image)
            })
                .catch((err) => {
                console.log(err);
            })}

    return(

        <div>
            <button onClick={handleClick}>More Breakfast!</button>
            <ImageContainer img={breakfastPhoto} msg={message} />
        </div>
    )
}

export default Breakfast