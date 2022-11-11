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
              <a href="#/" className="menu-link">
                ST SOFTWARE
              </a>
            </li>
            <li className="menu-item">
              <a href="#/" className="menu-link">
                ST DIGITAL
              </a>
            </li>
            <li className="menu-item">
              <a href="#/" className="menu-link">
                ST DIGITAL
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
          <a href="/join-us" className="nav-link">
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
