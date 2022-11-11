import React, { useState } from 'react'
import MenuMobile from './MenuMobile';

const NavMobile = () => {
  
  const [isShow, setIsShow] = useState(false)

  const handleShowNav = () => {
    isShow === true ? setIsShow(false) : setIsShow(true);
  };
  return (
    <div className="nav-mobile">
      <span className="nav-trigger" onClick={handleShowNav}>
        <i className="fa fa-navicon"></i>
      </span>
      {isShow && <MenuMobile/>}
    </div>
  )
}

export default NavMobile