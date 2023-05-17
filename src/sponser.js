import React from 'react'
import "./App.css";
import image from "./images/cacrousalimage.png";

const Sponser = () => {
  return (
    <div className='sponser'>
      <p className='Heading'>Transform your Number with our Services</p>
      <div className="sponser-cards">
      
          <img className='card' src={image} alt='text'/>
      
          <img className='card' src={image} alt='text'/>

          <img className='card' src={image} alt='text'/>
  
          <img className='card' src={image} alt='text'/>

          <img className='card' src={image} alt='text'/>
          
          <img className='card' src={image} alt='text'/>

          <img className='card' src={image} alt='text'/>

          <img className='card' src={image} alt='text'/>
      </div>
    </div>
  )
}

export default Sponser
