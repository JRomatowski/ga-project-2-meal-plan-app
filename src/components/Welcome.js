import Breakfast from "./Breakfast"
import Dinner from "./Dinner"
import Lunch from "./Lunch"
import { Route, Routes, Link } from 'react-router-dom';
import Cat from "./Cat";

function Welcome() {
    return(
        <>  
        Welcome Page Component
        <Cat />
        </>
    )
}

export default Welcome