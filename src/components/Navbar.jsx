import React from "react"
import rlogo from '../assets/react.svg'

function Navbar() {
    return (
        <nav className="nav">
            <a href="https://reactjs.org" target="_blank">
                <img src={rlogo} className="rlogo" alt="React logo" />
            </a>
            <h3 className="nav-title">ReactFacts</h3>
            <h4 className="nav-course">React Course - Project 1</h4>
        </nav>
    )
}
export default Navbar

