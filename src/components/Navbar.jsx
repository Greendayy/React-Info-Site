import React from "react"
import rlogo from '../assets/react.svg'

function Navbar(){
    return(
        <nav className="nav">
        <div>        
            <a href="https://reactjs.org" target="_blank">
            <img src={rlogo} className="rlogo" alt="React logo"/>
            </a>
        </div>
        <div className="nav-title">
            <h3>ReactFacts</h3>
        </div>
        <div className="nav-course">
            <h4 className="nav-h4">React Course-Project 1</h4>
        </div> 
        </nav>
    )
  }
  export default Navbar

   