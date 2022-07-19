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
                setCategoryList(data.categories)
                })       
            .catch((err) => {
                console.log(err);
            })
    }, []) 

    return (
        <>
            <section id='category-box'>
                {categoryList.map((categoryItem) => (
                    <div id='category-element'>{categoryItem.strCategory}</div>
                ))}
            </section>
        </>
    )
    }

export default Categories