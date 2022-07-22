import { useState, useEffect, useRef } from 'react'
import RecipeContainer from './RecipeContainer'
import RecipeInstructions from './RecipeInstructions';
import "./Components.css"

function Recipes() {

    const [recipe, setRecipe] = useState({})
    const [loading, setLoading] = useState(true);
    const [ingredientList, setIngredientList] = useState([])
    const [measurementList, setMeasurementList] = useState([])

    const counter = useRef(0);

    useEffect(() => {
        const url = "https://www.themealdb.com/api/json/v1/1/random.php"
        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {
                let newData = data.meals[0]
                counter.current += 1;
                if (counter.current <= newData.idMeal) {
                    setLoading(false);
                }
                setRecipe(data.meals[0]) 
                return data.meals[0]               
            })
            .then((data) => {
                let ingredientArray = []
                for (let i=1; i<21; i+=1) {
                    let ingredientString = "strIngredient"+i
                    if (data[ingredientString].length > 1) {
                    ingredientArray.push(i + ". " + data[ingredientString])
                    setIngredientList(ingredientArray)
                    } 
                }
                let measurementArray = []
                for (let i=1; i<21; i+=1) {
                    let measurementString = "strMeasure"+i
                    if (data[measurementString].length > 0) {
                    measurementArray.push(data[measurementString])
                    setMeasurementList(measurementArray)
                    } else {
                        return
                    }}
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
                return data.meals[0]               
            })
            .then((data) => {
                let ingredientArray = []
                for (let i=1; i<21; i+=1) {
                    let ingredientString = "strIngredient"+i
                    if (data[ingredientString].length > 1) {
                    ingredientArray.push(i + ". " + data[ingredientString])
                    setIngredientList(ingredientArray)
                    } 
                }
                let measurementArray = []
                for (let i=1; i<21; i+=1) {
                    let measurementString = "strMeasure"+i
                    if (data[measurementString].length > 0) {
                    measurementArray.push(data[measurementString])
                    setMeasurementList(measurementArray)
                    } else {
                        return
                    }}
            })
                .catch((err) => {
                console.log(err);
            })}

            // console.log(recipe)

    return(

        <div>
            <button onClick={handleClick}>Another Recipe!</button>
            <div id='recipe-image-container' style={{visibility: loading ? "hidden" : "visible"}}>

                <h3 id='picture-message'>{recipe.strMeal}</h3>

                <RecipeContainer
                    img={recipe.strMealThumb}
                    video={recipe.strYoutube}
                    msg={recipe.strMeal}           
                />



                <div id='ingredient-lists'>
                    <ul className='ingredient-list-items' id='ingredient-food'>
                        {ingredientList.map((ingredientItem, index) => (
                            <ul key={index}>{ingredientItem}</ul>
                        ))}                
                    </ul>

                    <ul className='ingredient-list-items'>
                        {measurementList.map((measurementItem, index) => (
                            <ul key={index}>{measurementItem}</ul>
                        ))}
                    </ul>
                </div>

                <RecipeInstructions
                    instructions={recipe.strInstructions}
                />
                
            </div>
        </div>
    )
}

export default Recipes