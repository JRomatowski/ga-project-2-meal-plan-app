import { useState, useEffect } from 'react'

function Categories() {

    const [categoryList, setCategoryList] = useState([])


    // Need to put fetch in useEffect or it will loop forever.
    useEffect(() => {

        const url = "https://www.themealdb.com/api/json/v1/1/categories.php"
        
        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {
                // console.log(data)
                // Below is the actual array.
                // console.log(data.categories)            
                // console.log(data.categories.length)
                // Passing fetched arrays into state
                // This creates a loop for some reason
                setCategoryList(data.categories)
                // setCategories(data.categories)
                // let categoryArray = data.categories
                // Below is what I'm going to put into the for loop
                // console.log(categoryArray)
                // console.log(categoryArray[0].strCategory)
                // for (let i=0; i < data.categories.length; i+=1) {
                //     console.log(categoryArray[i].strCategory)
                    // setCategories(categoryArray[i].strCategory)
                })       
            .catch((err) => {
                console.log(err);
            })
    }, []) 

    console.log(categoryList)
    console.log(categoryList[0])
    // console.log(categoryList.categories)
    // console.log(categoryList.categories[0])
    // let categoriesArray = categoryList.categories

    // console.log(categoriesArray[0])
    // console.log(categoriesArray[0])

    return(
        <>
            <div>Category Component</div>        
        </>
    )
    }

export default Categories