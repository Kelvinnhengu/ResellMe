import React from "react";
import logo from "../assets/images/resellme-logo2.png";
import icon from "../assets/images/tabler_window-maximize.png";
import search from "../assets/images/akar-icons_search.png";
import sun from "../assets/images/akar-icons_sun.png"

const Navbar = () => {
  return (
    <div>
      <header>
        <nav role="navigation">
          <div className="nav-child">
            <img className="logo" src={logo} alt="" />
            <a href="">Docs</a>
            <a href="">Blogs</a>
            <a href="">About Us</a>
          </div>
          <div className="nav-child">
            <a href="">
              Support <img src={icon} alt="" />
            </a>
            <a href="">
              Portal
              <img src={icon} alt="" />
            </a>
            <a href="">
              Register
              <img src={icon} alt="" />
            </a>
            <button className="sun"><img src={sun} alt="" /></button>
            <button className="search"><img src={search} alt="" />search</button>
            <button className="humburger-menu"></button>
          </div>
        </nav>
      </header>


      
    </div>
   
  );
};

export default Navbar;
