import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import assets from "../../assets/assets";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={assets.logo} alt="netflix" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={assets.searchIcon} alt="search" className="icons" />
        <p>Children</p>
        <img src={assets.bellIcon} alt="bell" className="icons" />
        <div className="navbar-profile">
          <img src={assets.profileImage} alt="profile Image" />
          <img src={assets.caretIcon} alt="dropdown" />
          <div className="dropdown">
            <p
              onClick={() => {
                logout(); // using parenthesis to execute this function
              }}
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
