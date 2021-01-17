import React from "react";
import "./header.scss";
import {Link} from 'react-router-dom';
import Option from "../option/option";

const Header = () => {
  return (
    <div className="header-container">

      <div className="logo-box">
        <h1 style={{color:'grey', fontFamily: 'Times New Roman'}}> Jumwami</h1> 
        {/* <img src="/images/logo.png" alt="" /> */}
      </div>

      <div className="subheader-wrapper">
          <div className='upper-subheader'>
              <div className="options-container">
              <Link to="/" >
              <Option text='HOME'/>
              </Link>
              <Link to="/services" >
              <Option text='SERVICES'/>
              </Link>
              <Link to="/projects" >
              <Option text='PROJECTS'/>
              </Link>
              
              </div>
          
          </div>
      
          <div className='lower-subheader'>
              <div className="options-container " style={{backgroundColor:'rgb(26, 25, 25) '}}>
              <Link>
              <Option text='ABOUT US'/>
              </Link>
              <Link to="/" >
              <Option text='CONTACT US'/>
              </Link>
              </div>
          </div>
      </div>

    </div>
  );
};

export default Header;
