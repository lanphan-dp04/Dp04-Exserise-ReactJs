import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuMobile = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShowNav = () => {
    isShow === true ? setIsShow(false) : setIsShow(true);
  };

  return (
    <nav>
      <ul className="nav-mobile-list">
        <li className="nav-mobile-item">
          <Link className="nav-mobile-link" to={`/`}>
            HOME
          </Link>
        </li>
        <li
          className={`nav-mobile-item expand-me ${
            isShow === true ? "expand-active" : ""
          }`}
          onClick={handleShowNav}
        >
          <div className={`mobile-link-wrapper`}>
            <Link className="nav-mobile-link nav-sub-menu" to={`/st-software`}>
              WHAT WE DO
            </Link>
          </div>
          <ul
            className={`sub-mobile-list ${
              isShow === true ? "mobile-list-active" : ""
            }`}
          >
            <li className="sub-mobile-item">
              <Link className="sub-mobile-link" to={`/st-software`}>
                ST SOFTWARE
              </Link>
            </li>
            <li className="sub-mobile-item">
              <Link className="sub-mobile-link" to={`/st-digital`}>
                ST DIGITAL
              </Link>
            </li>
            <li className="sub-mobile-item">
              <Link className="sub-mobile-link" to={`/st-incubation`}>
                ST INCUBATION
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-mobile-item">
          <Link className="nav-mobile-link" to={`/who-we-are`}>
            WHO WE ARE
          </Link>
        </li>
        <li className="nav-mobile-item">
          <Link className="nav-mobile-link" to={`/portfolio`}>
            PORTFOLIO
          </Link>
        </li>
        <li className="nav-mobile-item">
          <Link className="nav-mobile-link" to={`/join-us`}>
            JOIN US
          </Link>
        </li>
        <li className="nav-mobile-item">
          <Link className="nav-mobile-link" to={`/lets-talk`}>
            LET’S TALK
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMobile;
