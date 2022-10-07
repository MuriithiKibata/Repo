import React from 'react'
import "./home.css"
import Navbar from './Navbar'
import { Route, Routes } from "react-router-dom";
import About from './About';
import Stock from './Stock';
function Home() {
    let images = {
        img: "../assets/img.jpg"
      }
      console.log(images)
  return (
    <div> 
    
    
<div className='div'>
        <img className='image' src={images.img} alt='Home img' />
        <div className='babyDiv'>
          <h1 id='h0'>Welcome User 8715 to
            Micro Stocks Manager by Muriithi Kibata</h1>
          <h4 className='h4'>Powered by ReactJS</h4>
        </div>
      </div>

    </div>
  )
}

export default Home