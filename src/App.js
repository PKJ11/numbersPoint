import Navbar from './Navbar';
import React from 'react';
import './App.css';
import Hero from './hero';
import Carousal from './carousal';
import {SliderData} from "./data.js";
import Sponser from './sponser';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
     <Navbar/>
     <Hero/>
     <Carousal slidess={SliderData}/>
     <Sponser/>
     <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
