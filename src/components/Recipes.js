import { useState, useEffect } from 'react'
import ImageContainer from './ImageContainer'

function Recipes() {

    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        const url = "https://www.themealdb.com/api/json/v1/1/random.php"
        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {
                console.log(data)
                setRecipe(data.meals[0])
            })
            .catch((err) => {
                console.log(err);
            })
        }, [])

        function handleClick() {
            const url = "https://www.themealdb.com/api/json/v1/1/random.php"
            fetch(url)
                .then((res) => {
                return res.json()
            }) 
                .then((data) => {
                setRecipe(data.meals[0])
            })
                .catch((err) => {
                console.log(err);
            })}

    return(

        <div>
            <button onClick={handleClick}>Another Recipe!</button>
            <ImageContainer
                img={recipe.strMealThumb}
                msg={recipe.strMeal} 
                instructions={recipe.strInstructions} 
            />
        </div>
    )
}

export default Recipes