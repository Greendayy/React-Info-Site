import React from 'react';
import './App.css'
import Main from "./components/Main";
import Navbar from "./components/Navbar"

export default function App() {
const [darkMode,setDarkMode]=React.useState(true)

function toggleDarkMode(){
  setDarkMode(prevMode=>!prevMode)
}
  return (
    <div className="App">
      <Navbar 
      darkMode={darkMode} toggleDarkMode={toggleDarkMode}
      />
      <Main 
      darkMode={darkMode}
      />
    </div>
  )
}

