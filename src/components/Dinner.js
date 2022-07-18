import { useEffect, useState } from 'react'



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

        <div>Dinner components
            <button onClick={handleClick}>Random Dinner</button>
            <img src={dinnerPhoto} alt='dinner'/>
        </div>
    )
}

export default Dinner