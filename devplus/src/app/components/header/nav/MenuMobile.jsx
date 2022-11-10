import React, { useState } from 'react'

const MenuMobile = () =>  {
  const [isShow, setIsShow] = useState(false)

  const handleShowNav = () => {
    isShow === true ? setIsShow(false) : setIsShow(true);
  };

  return (
    <nav>
      <ul className="nav-mobile-list">
        <li className="nav-mobile-item">
          <a href="#/" className="nav-mobile-link">
            HOME
          </a>
        </li>
        <li className={`nav-mobile-item expand-me ${isShow=== true ? 'expand-active' : ''}`} onClick={handleShowNav}>
          <div className={`mobile-link-wrapper`}>
          <a href="#/" className="nav-mobile-link">
            WHAT WE DO
          </a>
          </div>
          <ul className={`sub-mobile-list ${isShow=== true ? 'mobile-list-active' : ''}`}>
            <li className="sub-mobile-item">
             <a href="#/" className="sub-mobile-link">
              ST SOFTWARE
             </a>
            </li>
            <li className="sub-mobile-item">
             <a href="#/" className="sub-mobile-link">
              ST DIGITAL
             </a>
            </li>
            <li className="sub-mobile-item">
             <a href="#/" className="sub-mobile-link">
              ST DIGITAL
             </a>
            </li>
          </ul>
        </li>
        <li className="nav-mobile-item">
          <a href="#/" className="nav-mobile-link">
            WHO WE ARE
          </a>
        </li>
        <li className="nav-mobile-item">
          <a href="#/" className="nav-mobile-link">
            PORTFOLIO
          </a>
        </li>
        <li className="nav-mobile-item">
          <a href="#/" className="nav-mobile-link">
            JOIN US
          </a>
        </li>
        <li className="nav-mobile-item">
          <a href="#/" className="nav-mobile-link">
            LET’S TALK
          </a>
        </li>
      </ul>
  </nav>
  )
}

export default MenuMobile