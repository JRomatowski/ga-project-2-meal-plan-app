import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Cat from './components/Cat';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <Link to="/">Choose your Meal!</Link>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Navigation/>} />
          <Route/>
        </Routes>


      </main>
    </div>
  );
}

export default App;
