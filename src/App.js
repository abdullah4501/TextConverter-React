import './App.css';
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#38393b';
      document.body.style.color = '#fff';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'inherit';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Routes>
            <Route exact path="/about" 
              element={
                <About />
                } />
            <Route exact path="/" 
              element={
              <TextForm heading="Enter the text below" mode={mode} />
              } />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;