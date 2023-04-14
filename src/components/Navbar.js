import { useEffect, useState } from "react";
import logoWhite from "../assets/logo/logo_white.png";
import logo from "../assets/logo/logo.png";
import { MdOutlineLightMode } from "react-icons/md";
import { links } from "../utils/data";
import { Link, useParams, useLocation } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [active, setActive] = useState(0);
  const [navActive, setNavActive] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    links.map((link, index) => {
      if (link.path === pathname) {
        setActive(index);
      }
    });
  }, []);

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
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        ) : (
          <Link to="/">
            <img src={logoWhite} alt="logo" />
          </Link>
        )}
        <div className={navActive ? "links nav-active" : "links"}>
          {links.map((item, index) => (
            <Link
              className={active === index ? "item active" : "item"}
              key={index}
              to={item.path}
              onClick={() => {
                setActive(index);
                setNavActive(false);
              }}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <span className="menu" onClick={() => setNavActive(!navActive)}>
          <BiMenuAltRight />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
