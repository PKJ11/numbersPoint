import React,{useState} from 'react';
import "./App.css";
import image from "./images/cacrousalimage.png";
import "../src/portfolio/portfolio.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from './data';

const Carousal = ({slidess}) => {

const [current,setcurrent] = useState(0);
const length = slidess.length;
var counter=0;

setInterval(() => {
  document.getElementsByName("image"+counter).checked=true;
  counter++;
  if(counter>3){
    counter =0;
  }
}, 5);

 const nextSlide=()=>{
  setcurrent(current===length-1 ? 0 : current+1);
 };

 const prevSlide =()=>{
  setcurrent(current=== 0 ? length-1 : current-1);
  };

  if (!Array.isArray(slidess) || slidess.length <= 0) {
    return null;
  }

  return (
    <div className='Carousal'>
      <p className='Heading'>Transform your Number with our Services</p>
      <div className='content'>
        <div className='left '>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      <div className='realslider'>
      {SliderData.map((slidess,index)=>{
        return (
          <div key={index} className={index===current ? "activated":"deactivated"}>
          {index === current && (
            <img src={slidess.image} Name={"image"+index} alt=""/>
          )}
          </div>
        );
      })}
      </div>
         </div>
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

export default Carousal
