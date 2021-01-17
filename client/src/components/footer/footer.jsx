import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div id='contact' className="footer-container">
      <div className="background-container"></div>
      <h4 className="title"> Contact Information</h4>
      <small> Email: julius@gmail.com </small> <br />
      <small>Phone: +254700000000</small> <br />
      <small>&copy; 2020 Jumwami . All rights reserved.</small>
    </div>
  );
};

export default Footer;