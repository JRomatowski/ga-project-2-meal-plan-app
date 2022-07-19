import { useState, useEffect } from 'react'
import "./Components.css"
import ImageContainer from './ImageContainer'

// TRYING DRINKS HERE

function Lunch() {

    const message = "Life choices!"
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
            <button onClick={handleClick}>More Life Choices!</button>
            <ImageContainer img={lunchPhoto} msg={message} />
        </div>
    </>
    )
}


export default Lunch