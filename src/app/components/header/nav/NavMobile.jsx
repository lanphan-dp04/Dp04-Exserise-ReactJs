import React, { useEffect, useState } from 'react'
import MenuMobile from './MenuMobile';
import useComponentVisible from './useComponentVisible';

const NavMobile = () => {
  // const { ref, isComponentVisible } = useComponentVisible(true);
  
  const [isShow, setIsShow] = useState(false)

  const handleShowNav = () => {
    isShow === true ? setIsShow(false) : setIsShow(true);
  };
  useEffect(() => {
    const $ = document.querySelector('.section-banner');
    $.addEventListener('click', () => {
      setIsShow(false);
    })
  })
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