import React from 'react'
import firstcard from "../Assets/firstcard.svg"
import Secondcard from "../Assets/Secondcard.svg"
import Thirdcard from "../Assets/Thirdcard.svg"
function Cards() {
  return (
    <div className='Short-images'>
      <div className='Cards-title1'>
        <img src = {firstcard} alt="" />
      <div className='matter1'> LED panel Lights</div>
      <div> Sleek,moders design for office and commercial spaces</div>
        
      
      </div>
      <div className='Cards-title2'>
        <img src={Secondcard} alt="" />
        <div>
          PC Downlights
        </div>
        <div>
          Compact and durable downlights for soft,uniform illumination
        </div>
      </div>
      <div className='Cards-title3'>
        <img src={Thirdcard} alt="" />
        <div>
          LED Streetlights
       <div>
        High-performance outdoor lighting for roads and public areas</div> </div>
      </div>
    </div>
  )
}

export default Cards
