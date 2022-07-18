import { useState, useEffect } from 'react';
import "./Meals.css"
import ImageContainer from './ImageContainer';

// IMPORT DOSAS HERE

function Breakfast() {

    const [breakfastPhoto, setBreakfastPhoto] = useState('')

    useEffect(() => {
        const url = "https://foodish-api.herokuapp.com/api/"
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
            const url = "https://foodish-api.herokuapp.com/api/"
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
            <button onClick={handleClick}>Random Breakfast</button>
            <ImageContainer img={breakfastPhoto} />
        </div>
    )
}

export default Breakfast