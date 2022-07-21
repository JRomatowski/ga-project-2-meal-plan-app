import { useState, useEffect } from 'react'

function Measurements(props) {

    // const url = "https://www.themealdb.com/api/json/v1/1/random.php"

    const [measurementList, setMeasurementList] = useState([])
    const [apiData, setApiData] = useState([])

//     useEffect(() => {    
//         fetch(url)
//             .then((res) => {
//                 return res.json()
//             }) 
//             .then((data) => {
//                 // console.log(data)
//                 let measurementArray = []
//                 let mainArray = data.meals[0]
//                 for (let i=1; i<21; i+=1) {
//                     let measurementString = "strMeasure"+i
//                     if (mainArray[measurementString].length > 0) {
//                     measurementArray.push(i + ". " + mainArray[measurementString])
//                     setMeasurementList(measurementArray)
//                     } else {
//                         return
//                     }
//                 }
//             })           
//             .catch((err) => {
//                 console.log(err);
//             })
// }, [])

// console.log(props.neededData)
// setApiData(props.neededData)
// console.log(apiData)

useEffect(() => {
    setApiData(props.neededData)
    // console.log(apiData)
    // console.log(apiData.strArea)
    // console.log(apiData.strMeasure1)
    let measurementArray = []
    // console.log(apiData[strMeasure1].length)
    for (let i=1; i<21; i+=1) {
        // let apiData = props.neededData
        let measurementString = "strMeasure"+i
        // console.log(measurementString)
        // console.log(apiData[measurementString].length)
    }
        // if (apiData[measurementString].length > 0) {
        // measurementArray.push(i + ". " + apiData[measurementString])
        // setMeasurementList(measurementArray)
        // } else {
        //     return
        // }
}, [])


    // let apiData = props.neededData
    // // console.log(apiData)
    // // console.log(apiData.strArea)
    // // console.log(apiData.strMeasure1)
    // let measurementArray = []
    // // console.log(apiData[strMeasure1].length)
    // for (let i=1; i<21; i+=1) {
    //     let measurementString = "strMeasure"+i
    //     // console.log(measurementString)
    //     console.log(apiData[measurementString])
    //     // console.log(apiData[measurementString].length)
    // }
    //     // if (apiData[measurementString].length > 0) {
    //     // measurementArray.push(i + ". " + apiData[measurementString])
    //     // setMeasurementList(measurementArray)
    //     // } else {
    //     //     return
    //     // }


// console.log(measurementList)

    return (
        <>
            {/* <div>Measurements Components</div>
            <ul>
                {measurementList.map((measurementItem) => (
                    <ul key={measurementItem}>{measurementItem}</ul>
                ))}
            </ul> */}
        </>

    )
}

export default Measurements