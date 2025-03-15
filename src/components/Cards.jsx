import React from 'react'
import firstcard from "../Assets/firstcard.svg"
import Secondcard from "../Assets/Secondcard.svg"
import Thirdcard from "../Assets/Thirdcard.svg"

function Cards() {
  return (
    <div className='Short-images'>
      <div className='Cards-title1'>
        <img src = {firstcard} 
         />
      <div className='matter1'> <h4>LED panel Lights</h4></div>
      <div> Sleek,moders design for office and commercial spaces</div>
        
      
      </div>
      <div className='Cards-title2'>
        <img src={Secondcard} alt="" />
        <div>
          <h4>PC Downlights</h4>
        </div>
        <div>
          Compact and durable downlights for soft,uniform illumination
        </div>
      </div>
      <div className='Cards-title3'>
        <img src={Thirdcard} alt="" />
        <div>
          <h4>LED Streetlights</h4>
       <div>
        High-performance outdoor lighting for roads and public areas</div> </div>
      </div>
     
    </div>
    
  )
}

export default Cards
