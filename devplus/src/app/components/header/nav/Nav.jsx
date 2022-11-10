import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#/" className="nav-link">
            HOME
          </a>
        </li>
        <li className="nav-item we-do">
          <a href="#/" className="nav-link">
            WHAT WE DO
          </a>
          <ul className="sub-menu">
            <li className="menu-item">
              <a href="/st-software" className="menu-link">
                ST SOFTWARE
              </a>
            </li>
            <li className="menu-item">
              <a href="/st-digital" className="menu-link">
                ST DIGITAL
              </a>
            </li>
            <li className="menu-item">
              <a href="/st-incubation" className="menu-link">
                ST INCUBATION
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#/" className="nav-link">
            WHO WE ARE
          </a>
        </li>
        <li className="nav-item">
          <a href="#/" className="nav-link">
            PORTFOLIO
          </a>
        </li>
        <li className="nav-item">
          <a href="#/" className="nav-link">
            JOIN US
          </a>
        </li>
        <li className="nav-item">
          <a href="#/" className="nav-link">
            LET’S TALK
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
