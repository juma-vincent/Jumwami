import React from "react";
import "./header.scss";
import {Link} from 'react-router-dom';
import Option from "../option/option";
import CustomLink from "../custom-link/custom-link";


const Header = () => {
  return (
    <div className="header-container">

      <div className="logo-box">        
        <img src="/images/jumwami-logo.png" className='logo' alt="" />
      </div>

      <div className="subheader-wrapper">
          <div className='upper-subheader'>
              <div className="options-container">
              <Link to='/'  >
              <Option text='HOME'/> 
              </Link>
              <CustomLink text='services'  >
              <Option text='SERVICES'/>
              </CustomLink>
              <Link  to='/projects'   >
              <Option text='PROJECTS'/>
              </Link>
              
              </div>
          
          </div>
      
          <div className='lower-subheader'>
              <div className="options-container " style={{backgroundColor:'rgb(26, 25, 25) '}}>
              <CustomLink text='about'>
              <Option text='ABOUT US'/>
              </CustomLink>
              <CustomLink text='contact' >
              <Option text='CONTACT US'/>
              </CustomLink>
              </div>
          </div>
      </div>

    </div>
  );
};

export default Header;
