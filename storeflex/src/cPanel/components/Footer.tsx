import React, { Component } from 'react';

const Footer = (props) => {
    return (
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between py-2">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="https://www.storeflex.com/" target="_blank" rel="noopener noreferrer"> www.storeflex.com </a>2022</span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"><a href="https://www.storeflex.com/privacy-policy/" target="_blank" rel="noopener noreferrer"> Privacy Policy  </a>| <a href="https://www.storeflex.com/terms-and-condition/" target="_blank" rel="noopener noreferrer"> Terms and Condition  </a>| <a href="https://www.storeflex.com/conatct-us/" target="_blank" rel="noopener noreferrer"> Contact Us  </a> </span>
        </div>
      </footer> 
    );
}

export default Footer;