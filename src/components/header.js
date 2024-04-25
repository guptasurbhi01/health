import React, { useState } from "react";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <h1>Health Wellness</h1>
      <p>MASSAGE THERAPY</p>
      <nav
        className={`topnav ${isNavExpanded ? "responsive" : ""}`}
        id="myTopnav"
      >
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#faq">F&Q</a>
        <a href="#contact">Contact</a>
        <button
          className="icon"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;
