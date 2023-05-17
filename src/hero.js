import React from 'react'
import "./App.css";
import heroimage from "../src/images/desktopimage.png";
import Floatingtext from './floatingtext';

const Hero = () => {
  return (
    <div className='Hero'>
    <div className='HeroLeft'>
       <Floatingtext text="India's Biggest" text2="VIP Number" text3="Provider"/> 
      <input className='herobutton' placeholder="  Enter your Number here..." type="number"/>
    </div>
    <div className='HeroRight'>
  <img src={heroimage} alt="heroimage" className='Heroimage'/>
    </div>
    </div>
  )
}

export default Hero
