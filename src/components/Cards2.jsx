import React from 'react'
import "./Cards2.css";
import Fourthcard from "../Assets/Fourthcard.svg"
import Fifthcard from "../Assets/Fifthcard.svg" 
import Sixthcard from "../Assets/Sixthcard.svg"

function Cards2() {
  return (
    <div className='Short-image2'> 
          <div >
            <img src={ Fourthcard} alt=""/>
            <div><h4>Flood Lights</h4></div>
            <div>powerful and weather-resistant lights for large outdoor spaces</div>
          </div>
          <div >
            <img src={Fifthcard} alt="" />
            <h4>LED indoor Lights</h4>
            <div>Style and efficient lightning solutions for Homes and Interiors</div>
          </div>
<div>
          <img src={Sixthcard} alt="" />
          <h4> LED outdoor lights</h4>
          <div>Robust and long -lasting lights designer for outdoor environment</div></div>
         
          
     </div>
  )
}

export default Cards2

