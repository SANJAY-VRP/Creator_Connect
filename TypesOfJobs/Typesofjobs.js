import React from "react";
import './t.css'
import vc7 from './mini project images/cc6.png'

function Typesofjobs(){
     const name= "Sanjay";
     const jobrole ="Web Developer"
     const content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero! Earum eum dolores praesentium recusandae. Facilis voluptatibus natus nostrum magnam."
     const exp =2;
     const rating = 4.5; 
    return(
      
        <div className="container">
            <div className="movebox">
            <div className="bigbox">
                 <img src={vc7} alt="" /> 
            </div>
               <div className="lengthbox">
                <h2>{name}</h2>
               <h3>{jobrole}</h3></div>
                
               <div className="hidden" >
               <p>{content}</p>
               </div>
               <div className="flexcenter">
               <div className="flex">
                <div className="text1">
                   <h3 className="hidden">Experience</h3><br />
                   <p className="hidden">{exp} Years</p>
                </div>
                <div className="text2">
                   <h3 className="hidden">Rating</h3><br />
                   <p className="hidden">{rating}</p>
                </div>
               </div>
               </div>



               <div className="flexcenter">
                <button className="hidden">CONNECT</button>
              
               </div>
              
              
               </div>
        </div>
      
    );

}
 export default Typesofjobs;

