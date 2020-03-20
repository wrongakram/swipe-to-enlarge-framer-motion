import React from "react";
import Logo from "../assets/logo.png";

const Breadcrumb = () => {
  return (
    <div className='header'>
      <div className='header-inner'>
        <div className='header-content'>
          <div className='logo'>
            <img src={Logo} alt='Logo' />
          </div>
          <div className='hamburger-menu'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
