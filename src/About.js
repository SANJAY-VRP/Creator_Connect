import React from 'react'
import './About.css'
import aboutpic from './mini project images/About.png'
import video12 from './mini project images/cc8.png'
import Footer from './Footer'

const About = () => {
  return (
    <div className='containerAbout'> 
               <div className="box  flex-center">
        <div className="topflex radius">
          <div className="bosstitle">
            <h1>
            Welcome to Creator Connect, a vibrant social media platform designed specifically for creators like you!
            </h1>
          </div>
          <div className="bossimage flex-center">
            <img className="bosspic" src={video12} alt="" />
          </div>
          <div></div>
        </div>
      </div>
      

   <div className='mission-box'>
   <h2 className='btext'>Our Mission</h2>
    <p  className='stext'>At Creator Connect, our mission is to provide a dedicated space where creators from all walks of life can come together to connect, collaborate, and showcase their work. We believe in the power of creativity to inspire, empower, and drive positive change in the world. Our platform is built with the following goals in mind:</p>
    <ul className='ultext'>
        <li className='litext'>Community Building: We aim to foster a supportive and inclusive community where creators can share their passion for their craft and learn from one another.</li>
        <li className='litext'>Inspiration: We aspire to inspire creativity and innovation by showcasing the amazing work of creators from diverse backgrounds and disciplines.</li>
         <li className='litext'>Empowerment: We strive to empower creators by providing them with the tools, resources, and opportunities they need to succeed in their creative endeavors.</li>
    </ul>
   </div>
    <h2 className='btext '>What We Offer</h2>
   <div className='Aboutflex holy'>
    <div className='dummy'>
    <div>
    <h3 className='btext2 n'>Profile Creation</h3>
    <p  className='stext blueline'>Create your personalized profile to showcase your portfolio, share your story, and connect with other creators.</p>
    </div>
   <div>
   <h3 className='btext2 n'>Content Sharing</h3>
   <p  className='stext blueline'>Share your creations with the world! Whether it's artwork, music, videos, writing, or any other form of creative expression, Creator Connect is the perfect platform to share your work and get discovered.</p>
  </div>
  <div>
   <h3 className='btext2 n'>Collaboration Opportunities</h3>
   <p  className='stext blueline'>Find collaborators for your projects or join forces with other creators to bring your ideas to life. Our platform makes it easy to connect with like-minded individuals and collaborate on exciting projects.</p>
  </div>
  <div>
   <h3 className='btext2 n'>Learning Resources</h3>
   <p  className='stext blueline'>Access a wealth of resources, tutorials, and workshops to enhance your skills and stay inspired on your creative journey.</p>
 </div>
 <div>
   <h3 className='btext2 n'>Community Support</h3>
   <p  className='stext blueline'>Join discussions, participate in forums, and engage with fellow creators who share your interests and passions. Our community is here to support you every step of the way.</p>
  </div>
 
    </div>
    <div className='gif'>
<img src={aboutpic} alt="" />
    </div>
   </div>

   <div>
   <h2 className='btext'>Join Us Today!</h2>
   <p  className='stext'>Ready to connect with fellow creators, share your work, and be part of a vibrant creative community? Join Creator Connect today and unlock endless possibilities for your creativity!</p>
   </div>
   <Footer/>

    </div>
  )
}

export default About