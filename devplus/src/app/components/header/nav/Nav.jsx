import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to={`/`}>
            HOME
          </Link>
        </li>
        <li className="nav-item we-do">
          <Link className="nav-link" to={`/st-software`}>
            WHAT WE DO
          </Link>
          <ul className="sub-menu">
            <li className="menu-item">
              <Link className="menu-link" to={`/st-software`}>
                ST SOFTWARE
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to={`/st-digital`}>
                ST DIGITAL
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to={`/st-incubation`}>
                ST INCUBATION
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/who-we-are`}>
            WHO WE ARE
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/portfolio`}>
            PORTFOLIO
          </Link>
        </li>
        <li className="nav-item">
<<<<<<< HEAD
          <a href="/join-us" className="nav-link">
=======
          <Link className="nav-link" to={`/join-us`}>
>>>>>>> b58fea70ddbfc9ba5b06567cfc9182f261543e6a
            JOIN US
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/lets-talk`}>
            LET’S TALK
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
