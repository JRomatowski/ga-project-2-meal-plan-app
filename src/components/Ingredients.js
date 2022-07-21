import { useState, useEffect } from 'react'
import Measurements from './Measurements'

function Ingredients() {

    const url = "https://www.themealdb.com/api/json/v1/1/random.php"

    const [ingredientList, setIngredientList] = useState([])
    const [apiData, setApiData] = useState([])

    useEffect(() => {    
        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {
                let ingredientArray = []
                let firstArray = data.meals[0]
                // console.log(data.meals[0])
                // console.log(firstArray)
                setApiData(firstArray)
                // console.log(apiData)
                for (let i=1; i<21; i+=1) {
                    let ingredientString = "strIngredient"+i
                    if (firstArray[ingredientString].length > 1) {
                    ingredientArray.push(i + ". " + firstArray[ingredientString])
                    setIngredientList(ingredientArray)
                    } else {
                        return
                    }
                }
            })

            .catch((err) => {
                console.log(err);
            })
}, [])

// console.log(ingredientList)
// console.log(apiData)

    return (
        <>
            <div>Ingredients Components</div>
            <ul>
                {ingredientList.map((ingredientItem) => (
                    <ul key={ingredientItem}>{ingredientItem}</ul>
                ))}                
            </ul>
            <Measurements neededData={apiData} />
        </>

    )
}

export default Ingredients