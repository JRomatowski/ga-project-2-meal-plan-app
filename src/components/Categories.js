import { useState, useEffect } from 'react'

function Categories() {

    const [categoryList, setCategoryList] = useState([])

    const url = "https://www.themealdb.com/api/json/v1/1/categories.php"


    // Need to put fetch in useEffect or it will loop forever.
    useEffect(() => {    
        fetch(url)
            .then((res) => {
                return res.json()
            }) 
            .then((data) => {
                // for (let i=0; i < data.categories.length; i += 1) {
                //     setCategoryList(data.categories)
                //     return(
                //         <div>test</div>
                //     )
                // }
                setCategoryList(data.categories)
                // console.log(data.categories)
                
                // console.log(JSON.stringify(categoryList[0].strCategory))
                })       
            .catch((err) => {
                console.log(err);
            })
    }, []) 


    // console.log(categoryList.categories)
    // console.log(categoryList)
    // console.log(categoryList.strCategory)
    // console.log(categoryList[0])
    // console.log(categoryList.categories)
    // console.log(categoryList.categories[0])
    // let categoriesArray = categoryList.categories

    // console.log(categoriesArray[0])
    // console.log(categoriesArray[0])

    return (
        <>
            {/* <div>Category Component</div>    */}
            <section>
                {categoryList.map((categoryItem) => (
                    <div>{categoryItem.strCategory}</div>
                ))}
            </section>
        </>
    )
    }

export default Categories