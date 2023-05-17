import React from 'react'
import logo from "../src/images/logo.png";
import "./App.css";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='NavbarLeft'>
       <img src={logo} alt="Logo" className='logoimage'/>
       <input className='herobutton navbar-button' type='number' placeholder='   Enter your Number here...'/> 
      </div>
      <div className='NavabrRight'>
    <a href='/' className='Home'>Home</a>
    <a href='/' className='Store'>Store</a>
    <a href='/' className='Plans'>Plans</a>
    <a href='/' className='Plans'>Login</a>
      </div>
    </div>
  )
}

export default Navbar
