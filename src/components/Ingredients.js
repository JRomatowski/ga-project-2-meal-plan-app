import { useState, useEffect } from 'react'

function Ingredients() {

    const url = "https://www.themealdb.com/api/json/v1/1/random.php"

    const [ingredientList, setIngredientList] = useState([])

    useEffect(() => {    
        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {

                let ingredientArray = []
                let mainArray = data.meals[0]
                for (let i=1; i<21; i+=1) {
                    let ingredientString = "strIngredient"+i
                    if (mainArray[ingredientString].length > 1) {
                    ingredientArray.push(i + ". " + mainArray[ingredientString])
                    setIngredientList(ingredientArray)
                    } 
                    
                    else {
                        return
                    }
                }
            })           
            .catch((err) => {
                console.log(err);
            })
}, [])

// console.log(ingredientList)

    return (
        <>
            <div>Ingredients Components</div>
            <ul>
                {ingredientList.map((ingredientItem) => (
                    <ul key={ingredientItem}>{ingredientItem}</ul>
                ))}
            </ul>
        </>

    )
}

export default Ingredients