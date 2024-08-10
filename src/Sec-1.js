import React from "react";
import vdsrc from "./videos/video.mp4";
import { useState } from "react";
import "./video.css";
import vc from "./mini project images/cc.jpg";
import vc1 from "./mini project images/cc1.jpg";
import vc2 from "./mini project images/cc2.jpg";
import vc3 from "./mini project images/cc3.jpg";
import vc5 from "./mini project images/cc4.png";
import vc4 from "./mini project images/top.png";
import vc6 from "./mini project images/cc5.png";
import vc7 from "./mini project images/cc6.png";
import Header from "./Header";
import { document } from "postcss";
import Portfolia from "./Portfolia";
import LoginForm from "./Login2";

function Videocomponent() {
  const hlc = () => {
    window.location.href = "/Login.js"; // Redirect to the login page
  };
  

  return (
    <div className="container">
      {/* <div className="top st">
    <nav>
     <div className="heading">
        <h2>Creator Connect</h2>
        <h3 className="grey">Creators SocialMedia</h3>
     </div>
        <div className="navbar">
        <a href="" >Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Media</a>
    </div>
    </nav>
    </div> */}
   
     
      <div className="box  flex-center">
      
        <div className="topflex radius">
          <div className="bosstitle">
            <h1>
              "Empower your creativity, connect with media professionals effortlessly at
              Creator Connect!"
            </h1>
          </div>
          <div className="bossimage flex-center">
            <img className="bosspic" src={vc4} alt="" />
          </div>
          <div></div>
        </div>
      </div>

      <div className="n">
        <div className="flex pls">
          <div className="div">
            <img className="video " src={vc2} alt="" srcset="" />
          </div>
          <div className="text-1">
            <h2 className="blacky" >Media Professionals</h2>
            <p className="ptext1">
              "Elevate your media projects with top-tier professional talent."
            </p>
            <a href="">See More...</a>
          </div>
        </div>
        <div className="flex pls ">
          <div className="div">
            <img className="video" src={vc3} alt="" srcset="" />
          </div>
          <div className="text-1">
            <h2 className="blacky">Creator Collaborations</h2>
            <p  className="ptext1">
              "Foster creative synergy through seamless creator collaboration."
            </p>
            <a href="">See More...</a>
          </div>
        </div>

        <div className="flex pls">
          <div className="div">
            <img className="video" src={vc1} alt="" srcset="" />
          </div>
          <div className="text-1">
            <h2 className="blacky">Brand Collaborations</h2>
            <p  className="ptext1">"Unleash the power of collaborative branding initiatives."</p>
            <a href="">See More...</a>
          </div>
        </div>
      </div>

      <div className="box v flex-center">
        <div className="topflex radius">
          <div className="bosstitle x">
            <h1>Popular Creators About</h1>
            <h1>Creator Connect</h1>
          </div>
          <div className="bossimage w ">
            <div className="bosspic fdc">
              <iframe
                className="pop"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Ors1Kaz0yTs?si=A0Mh_6XGOl0qEsne"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* <div className="box flex-center">
        <div className="topflex  radius">
        <div className="bosstitle  x">
        <p>Contact-Us:</p>
             <p>Kumaraguru college of technology.</p>
             <p>Coimbatore</p>
             <p>Email : kct@gmail.com</p>
      </div>
      <div className="bossimage w ">
      <div className="bosspic  fdc"> 
      <iframe className="location1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.121176995206!2d76.9571077459919!3d11.017584126337638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855910aed83%3A0x80875de5cd370a9d!2sGandhipuram%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1708409196366!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
      <div>

      </div>
      </div>
    </div> */}

      <div className="no">
        <div className="easy">
          <h1 className="blue">COLLABORATE AND GROW</h1>
          <p  className="ptext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            laborum enim. Dolore dolores earum repellat laborum explicabo
            accusamus quis ex nesciunt perspiciatis, eligendi asperiores
            cupiditate animi, incidunt, voluptatum vitae natus!
          </p>
        </div>
        <div className="flex ">
          <div className="div ">
            <img className="video border" src={vc7} alt="" srcset="" />
          </div>
        </div>
      </div>
      <Portfolia/>
   
   

    </div>
    
  );
}

export default Videocomponent;
