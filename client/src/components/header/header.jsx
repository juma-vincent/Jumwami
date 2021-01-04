import React from "react";
import "./header.scss";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-box">
        <h1 style={{color:'grey', fontFamily: 'Times New Roman'}}> Jumwami</h1> 
        {/* <img src="/images/logo.png" alt="" /> */}
      </div>
      <div className="options-container">
        <a to="/" className="option">
          HOME
        </a>
        <a to="/projects" className="option">
          PROJECTS
        </a>
      </div>
    </div>
  );
};

export default Header;
