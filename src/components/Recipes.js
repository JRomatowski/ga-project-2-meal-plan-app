import { useState, useEffect, useRef } from 'react'
import RecipeContainer from './RecipeContainer'
import RecipeInstructions from './RecipeInstructions';

function Recipes() {

    const [recipe, setRecipe] = useState({})
    const [loading, setLoading] = useState(true);

    const counter = useRef(0);

    useEffect(() => {
        const url = "https://www.themealdb.com/api/json/v1/1/random.php"
        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {
                let newData = data.meals[0]
                // I have no idea why this works, but I found it on stack overflow.  This is different than how I had it on ./Cat.js because the item being returned with the fetch is different, not entirely clear on why.  This API gives an object, and the cat API gives an array?  
                counter.current += 1;
                if (counter.current <= newData.idMeal) {
                    setLoading(false);
                }
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
            <div id='recipe-image-container' style={{visibility: loading ? "hidden" : "visible"}}>
                <RecipeContainer
                    img={recipe.strMealThumb}
                    video={recipe.strYoutube}
                    msg={recipe.strMeal}           
                />
                <RecipeInstructions
                    instructions={recipe.strInstructions}
                />
            </div>
        </div>
    )
}

export default Recipes