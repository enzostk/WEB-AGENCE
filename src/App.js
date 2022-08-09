import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import Navbar from './Components/Navbar/Navbar';
import './App.css'

const App = () => {

  const [dark, setDark] = useState(
    localStorage.getItem('dark-mode') === 'true'
  );
  useEffect(() => {
    localStorage.setItem('dark-mode', dark);
  }, [dark]);
  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <BrowserRouter>
    <div id="app">
      <Navbar />
      <div className={`app-wrapper ${dark ? 'dark' : ''}`}>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          <img src="https://felixgerschau.com/logos/lightbulb.svg" className='btnImg'  alt='/' />
         </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;