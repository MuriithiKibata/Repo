import React from 'react'
import "./nav.css"
import { NavLink } from "react-router-dom";
import Home from './Home';
function Navbar() {
  return (
    <div className='divContainer'>
            <NavLink to= '/stock'>
            <h2 className='h1'> Stocks</h2>
            </NavLink>
            <NavLink to = '/home'>
            <h2 className='h2'> Home</h2>
            </NavLink>
            <NavLink to='/about'>
            <h2 className='h3'> About</h2>
            </NavLink>
        </div>
  )
}

export default Navbar