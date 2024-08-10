import React from "react";
import './Header.css';
import Portfolia from './Portfolia';
import Videocomponent from './Sec-1';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from "./About";
import LoginForm from "./Login2";
import SignUpForm from "./Signup";
import Erichal from "./Profile";
import BoxComponent from "./Users";
import ProfessionalSearch from "./ProfessionalSearch";
import CreatorsSearch from "./CreatorsSearch";
import JobListing from "./JobListing";
import JobsDisplaying from "./JobDisplaying";
import DisplayingUsersList from "./DisplayingUser";
import DisplayWorks from "./DisplayWorks";
import ApplicantList from "./ApplicantList";
import AdminPanel from "./AdminPanel";
import Users from "./DisplayingUser";




function Header({ uploadingRef }) {
    const handlePostingClick = () => {
        if (uploadingRef.current) {
            uploadingRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="headc work">
            <div className="headtop">
                <nav>
                    <div className="head">
                        <h2>Creator Connect</h2>
                        <h3 className="greyc">Creators SocialMedia</h3>
                    </div>
                    <nav className="navbarhead">
          <ul className="a">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>

            
            <li><Link to="/Signup">Signin</Link></li>
            <li><Link to="/Login2">Login</Link></li>
            <li><Link to="/ProfessionalSearch">Professionals_Search</Link></li>
            <li><Link to="/CreatorsSearch">Creators_Search</Link></li>
            <li><Link to="/AdminPanel">Admin</Link></li>



       

          
            {/* <li><Link to="/DisplayingUsersList">UsersDisplaying</Link></li> */}

        
  
          

           
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Videocomponent/>} />
          <Route path="/DisplayingUser" element={<DisplayingUsersList/>} />

          
          <Route path="/About" element={<About/>} />



          <Route path="/Profile" element={<Erichal/>} />
          <Route path="/Signup" element={<SignUpForm/>} />
          <Route path="/Login2" element={<LoginForm/>} />
          <Route path="/ProfessionalSearch" element={<ProfessionalSearch/>} />
          <Route path="/CreatorsSearch" element={<CreatorsSearch/>} />
          <Route path="/AdminPanel" element={<AdminPanel/>} />
     

          


          {/* <Route path="/DisplayingUsersList" element={<DisplayingUsersList/>} /> */}
         
        </Routes>
                </nav>
            </div>
        </div>
    );
}

export default Header;
