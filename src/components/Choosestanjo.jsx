import React from 'react'
import "./Choosestanjo.css";
import  ChooseStanjopic1 from "../Assets/ChooseStanjopic1.svg"
import ChooseStanjopic2 from "../Assets/ChooseStanjopic2.svg"
import ChooseStanjopic3 from "../Assets/ChooseStanjopic3.svg"
import ChooseStanjopic4 from "../Assets/ChooseStanjopic4.svg"
function Choosestanjo() {
  return (
    <div>
        
        <div className='Choose-stanjo'>
           
         <h3 className='Sub-heading'>WHY CHOOSE STANJO LIGHTS</h3>
            <h2 className='heading'>Stanjo LED Lights-Where Innovation Meets Illuminations!</h2>
            <p className='Discription'>Smarter,brighter, and built to last-light up your world with cutting-edge LED technology designed for brilliance and efficiency!</p>
        </div>
        <div className='Choose-Stanjo-image'>

        <div className='Choose-Stanjo-image1'>
            <img src={ChooseStanjopic1} alt=""/>
        </div>
        <div className='Choose-stanjo-image2'>
            <img src={ChooseStanjopic2} alt="" />
        </div>
        <div className='Choose-stanjo-image3'>
            <img src={ChooseStanjopic3} alt=""/>
        </div>
        <div className='Choose-stanjo-image4'>
            <img src={ChooseStanjopic4} alt="" />
        </div>
        </div>
        <div className='gap'></div>
      
    </div>
  )
}

export default Choosestanjo;
