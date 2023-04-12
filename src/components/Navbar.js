import { useEffect, useState } from "react";
import logoWhite from "../assets/logo/logo_white.png";
import logo from "../assets/logo/logo.png";
import { MdOutlineLightMode } from "react-icons/md";
import { links } from "../utils/data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrollPosition > 100 ? "navbar-scrolled navbar" : "navbar"}>
      <div className="center">
        {scrollPosition > 100 ? (
          <img src={logo} alt="logo" />
        ) : (
          <img src={logoWhite} alt="logo" />
        )}
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
