import { useState, useEffect } from 'react'

// TRYING DRINKS HERE



function Lunch() {
    const [lunchPhoto, setLunchPhoto] = useState('')

    useEffect(() => {
        const url = "https://foodish-api.herokuapp.com/api/"
        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {
                console.log(data)
                setLunchPhoto(data.image)
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
                setLunchPhoto(data.image)
            })
                .catch((err) => {
                console.log(err);
            })}

    return(
    <>
        <div>Lunch Component
            <button onClick={handleClick}>Lunch Button</button>
            <img src={lunchPhoto} alt='dinner'/>
        </div>
        <main>
        </main>
    
    </>
    )
}


export default Lunch