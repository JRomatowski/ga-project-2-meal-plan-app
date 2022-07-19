import './App.css';
import Welcome from './components/Welcome';
import { Routes, Route, Link } from 'react-router-dom'
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import Dinner from './components/Dinner';





function App() {

  return (
    <div className="App">
      <header>
        <h1 className='navigation'>
          <Link to="/">home//</Link>
          {/* <br></br> */}
          <Link to='/breakfast'>am.</Link>
          {/* <br></br> */}
          <Link to='/lunch'>lunch.</Link>
          {/* <br></br> */}
          <Link to='/dinner'>pm</Link>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/breakfast' element={<Breakfast/>}/>
          <Route path='/lunch' element={<Lunch/>}/>
          <Route path='/dinner' element={<Dinner/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
