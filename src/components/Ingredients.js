import { useState, useEffect } from 'react'

function Ingredients() {

    const url = "https://www.themealdb.com/api/json/v1/1/random.php"

    const [ingredientList, setIngredientList] = useState('')

    useEffect(() => {    
        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {
                // console.log(data)
                let mainArray = data.meals[0]
                // console.log("strIngredient"+'1')
                // console.log(mainArray)
                // console.log(mainArray[0].strIngredient1)
                for (let i=1; i<21; i+=1) {
                    let blankArray = "strIngredient"+i
                    // console.log(blankArray)
                    // console.log(mainArray[0])
                    console.log(mainArray[blankArray])
                    // for (let i=1; i<21; i+=1) {
                    //     return mainArray[0].blankArray
                    // }
                }
                // console.log(mainArray[0].strIngredient1)
                // let filteredArray = mainArray.filter((ingredient) => {
                //     for (let i=1; i < 21; i+=1)
                //         return "mainArray.strIngredient" + i
                // })
            })
            
            .catch((err) => {
                console.log(err);
            })
}, [])

    // console.log(ingredientList[0])

    return (
        <div>Ingredients Components</div>
    )
}

export default Ingredients