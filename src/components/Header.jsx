import React from "react";
import "./header.css"
import facebook from "../Assets/facebook.svg"
import linkdin from "../Assets/linkdin.svg"
import twitter from "../Assets/twitter.svg"
import Location from "../Assets/Location.svg"
import instagram from "../Assets/instagram.png"
import stanjo from "../Assets/stanjo.svg"
import harmburger from "../Assets/harmburger.svg"
import mail from "../Assets/mail.svg"
function Header () {
    return( 
        <div className="main">
            <div className="main_header">

               <div className="header">
                
                <ui> <img src ={Location} alt="" /> Hyderabad,India</ui>
                <ui>  +9652287461</ui>
                <ui><img src ={mail}  alt=""  />rani@gmail.com</ui>
                </div>
                <div className="right-header">
                 <img src={facebook} alt="" />
                <img src={linkdin} alt="" />
                <img src={twitter} alt="" /> 
                <img src = {instagram} alt = "" />
                
                </div>
            
            </div>
            <div className="Second_header">
                <div className="header2">
                    <div>
                        < img src ={stanjo} alt=""/> </div>
                <div  className="middle-menu">
                     <ui>home</ui>
                    <ui>about</ui>
                    <ui>certifications</ui>
                    <ui>productsLM79 reports</ui>
                    <ui>shop</ui>
                    <ui>Contact us</ui>
                    <ui>Calculators</ui>
                </div> 
                    <div className="right-header2">
                        < img src={harmburger} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header