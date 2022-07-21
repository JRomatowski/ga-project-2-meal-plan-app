import { useState, useEffect } from 'react'
import "./Components.css"

function Ingredients() {

    const url = "https://www.themealdb.com/api/json/v1/1/random.php"

    const [ingredientList, setIngredientList] = useState([])
    const [measurementList, setMeasurementList] = useState([])

    useEffect(() => {    
        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {
                let ingredientArray = []
                let firstArray = data.meals[0]
                for (let i=1; i<21; i+=1) {
                    let ingredientString = "strIngredient"+i
                    if (firstArray[ingredientString].length > 1) {
                    ingredientArray.push(i + ". " + firstArray[ingredientString])
                    setIngredientList(ingredientArray)
                    } 
                }
                let measurementArray = []
                let mainArray = data.meals[0]
                console.log(mainArray)
                for (let i=1; i<21; i+=1) {
                    let measurementString = "strMeasure"+i
                    if (mainArray[measurementString].length > 0) {
                    measurementArray.push(mainArray[measurementString])
                    setMeasurementList(measurementArray)
                    } else {
                        return
                    }}
            })
            .catch((err) => {
                console.log(err);
            })
}, [])

    return (
        <>
        <div id='ingredient-lists'>
            <ul>
                {ingredientList.map((ingredientItem, index) => (
                    <ul key={index}>{ingredientItem}</ul>
                ))}                
            </ul>
            <ul>
                {measurementList.map((measurementItem, index) => (
                    <ul key={index}>{measurementItem}</ul>
                ))}
            </ul>
        </div>
        </>

    )
}

export default Ingredients