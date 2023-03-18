import React from "react";
import logo from "../assets/logo/logo.png";
import { MdOutlineLightMode } from "react-icons/md";
import { links } from "../utils/data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="center">
        <img src={logo} alt="logo" />
        <div className="links">
          {links.map((item, index) => (
            <Link className="item" key={index} to={item.path}>
              {item.text}
            </Link>
          ))}
        </div>
        <span>
          <MdOutlineLightMode />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
