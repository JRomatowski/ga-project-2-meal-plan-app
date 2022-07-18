import { useEffect, useState } from 'react';

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
        }, [])

    return(

        <div>Breakfast
            <button>Random Breakfast</button>
            <img src={breakfastPhoto} alt='dinner'/>
        </div>
    )
}

export default Breakfast