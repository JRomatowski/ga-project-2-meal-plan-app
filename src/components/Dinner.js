import { useState, useEffect } from 'react'
import "./Meals.css"
import ImageContainer from './ImageContainer'



function Dinner() {

    
    const [dinnerPhoto, setDinnerPhoto] = useState('')

    useEffect(() => {
        const url = "https://foodish-api.herokuapp.com/api/"
        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {
                console.log(data)
                setDinnerPhoto(data.image)
            })
            .catch((err) => {
                console.log(err);
            })
        }, [])

        function handleClick() {
            const url = "https://foodish-api.herokuapp.com/api/"
            fetch(url)
                .then((res) => {
                return res.json()
            }) 
                .then((data) => {
                setDinnerPhoto(data.image)
            })
                .catch((err) => {
                console.log(err);
            })}

    return(

        <div>
            <button onClick={handleClick}>Random Breakfast</button>
            <ImageContainer img={dinnerPhoto} />
        </div>
    )
}

export default Dinner