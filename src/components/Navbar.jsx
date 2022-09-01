import React from "react"
import rlogo from '../assets/react.svg'

function Navbar(props) {
    return (
        <nav className={props.darkMode?"dark":""}>
            <a href="https://reactjs.org" target="_blank">
                <img src={rlogo} className="rlogo" alt="React logo" />
            </a>
            <h3 className="nav-title">ReactFacts</h3>
            <div className="toggler">
                <p className="toggler-light">Light</p>
            <div className="slider" 
                onClick={props.toggleDarkMode}>
                <div className="circle" id="circle"></div>
            </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    )
}
export default Navbar

