import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        Bugtech
      </a>
      
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/timein" className="nav__link">
            Timein
          </a>
        </li>
        <li className="nav__item">
          <a href="/timeout" className="nav__link">
            Timeout
          </a>
        </li>
        <li className="nav__item">
          <a href="/reports" className="nav__link">
            Reports
          </a>
        </li>
        <li className="nav__item">
          <a href="/profile" className="nav__link">
            Profile
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;