import React from "react";
import logo from "../assets/logo/logo.png";
import { GoLocation } from "react-icons/go";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GrYoutube } from "react-icons/gr";
import map from "../assets/images/map.jpg";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer style={{ backgroundImage: `url(${map})` }}>
      <div className="content">
        <div className="top">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="text">
            <span>
              <GoLocation />
            </span>
            <p>
              Plot 8A, Elsie Femi Pearse Street,
              <br /> Off Adeola Odeku, Victoria Island Lagos P.O. Box 70823,
              <br /> Victoria Island, Lagos, Nigeria.
            </p>
          </div>
        </div>
        {/* <div className="bottom"> */}
        <div className="item">
          <h1>quick links</h1>

          <p>
            <Link to="/about" className="links">
              About Us
            </Link>
          </p>
          <p>
            <Link to="/services" className="links">
              Services
            </Link>
          </p>
          <p>
            <Link to="/individual" className="links">
              Business processes
            </Link>
          </p>
          <p>
            <Link to="/contact" className="links">
              Contact
            </Link>
          </p>
        </div>
        <div className="item">
          <h1>resources</h1>
          <p>
            <Link to="/services" className="links">
              Services
            </Link>
          </p>
          <p>
            <Link to="/services" className="links">
              Resources
            </Link>
          </p>
        </div>
        <div className="item">
          <h1>contact information</h1>
          <div className="icons">
            <BsFacebook />
            <GrYoutube />
            <BsInstagram />
            <BsTwitter />
          </div>
          <p>info@email.com</p>
          <p>enquiries@email.com</p>
          <p>+234 (1) 2716892</p>
          <p>+234 (1) 2718630</p>
        </div>
      </div>
      <p className="copyright">© PAC Research Nigeria Copyright {date}</p>
    </footer>
  );
};

export default Footer;
