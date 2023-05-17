import React from 'react'
import "./App.css";
import image from "./images/cacrousalimage.png";

const Sponser = () => {
  return (
    <div className='sponser'>
      <p className='Heading'>Transform your Number with our Services</p>
      <div className="sponser-cards">
      <div className='right'>
        <div class="back">
      <div class="back-content">
        <img src={image} alt="#"/>
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Sponser
