import { useState, useEffect } from 'react'

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

    return(

        <div>Lunch Component
            <button>Random Lunch</button>
            <img src={lunchPhoto} alt='dinner'/>
        </div>
    )
}

export default Lunch