import './App.css';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom'
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import Dinner from './components/Dinner';
import Recipes from './components/Recipes';





function App() {

  return (
    <div className="App">
      <header>
        <h1 className='navigation'>
          <Link to="/">home</Link>
          {/* <Link to='/breakfast'>am.</Link>
          <Link to='/lunch'>lunch.</Link>
          <Link to='/dinner'>pm</Link> */}
          <Link to='/recipes'>~recipes</Link>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/breakfast' element={<Breakfast/>}/>
          <Route path='/lunch' element={<Lunch/>}/>
          <Route path='/dinner' element={<Dinner/>}/>
          <Route path='/recipes' element={<Recipes/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
