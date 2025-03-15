import React from 'react'
import Seventhcard from "../Assets/Seventhcard.svg"
import Eightcard from "../Assets/Eightcard.svg"
import Ninthcard from "../Assets/Ninthcard.svg"
function Card3() {
  return (
    
    <div className='Short-image3'>
        <div>
         <img src={Seventhcard} alt="" />
          <h4>COB Spotlights</h4>
          <div>Focused and high -intensity lightning for accent and task lightning</div> 
        </div>
        <div>
            <img src={Eightcard} alt="" />
            <h4>LED Bulbs and tubelights</h4>
            <div>Energy-saving and long-lasting lightning for everyday use</div>
        </div>
        <div className='Ninthpic'>
            <img src={Ninthcard} alt="" />
            <h4>
                2*2 LED Soft Lights
            </h4>
            <div>
                Evenly Diffused  Lightning for glare-free illumination in  offices and homes
            </div>
            <div className='gap'>

            </div>
        </div>
       
    </div>
  )
}

export default Card3
