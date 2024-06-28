import React from 'react';
import '../style.css';
// import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">
            {/* <img src={logo} alt="logo" /> */}
          </a>
        </div>
        <div className="nav__menu__btn" id="menu-btn">
          {/* <i className="ri-menu-line"></i> */}
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li><a href="#">About Me</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#" className="hire__me">Hire Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
