import { useState, useEffect } from 'react'
import "./Meals.css"
import ImageContainer from './ImageContainer'

// TRYING DRINKS HERE

function Lunch() {
    const [lunchPhoto, setLunchPhoto] = useState('')

    useEffect(() => {
        const url = "https://thecocktaildb.com/api/json/v1/1/random.php"
        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {
                console.log(data)
                setLunchPhoto(data.drinks[0].strDrinkThumb)
            })
            .catch((err) => {
                console.log(err);
            })
        }, [])

        function handleClick() {
            const url = "https://thecocktaildb.com/api/json/v1/1/random.php"
            fetch(url)
                .then((res) => {
                return res.json()
            }) 
                .then((data) => {
                setLunchPhoto(data.drinks[0].strDrinkThumb)
            })
                .catch((err) => {
                console.log(err);
            })}

    return(
    <>
        <div>
            <button onClick={handleClick}>Random Lunch</button>
            <ImageContainer img={lunchPhoto} />
        </div>
    </>
    )
}


export default Lunch