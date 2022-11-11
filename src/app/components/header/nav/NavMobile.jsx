import React, { useEffect, useState } from 'react'
import MenuMobile from './MenuMobile';


const NavMobile = () => {
  
  const [isShow, setIsShow] = useState(false)

  const handleShowNav = () => {
    isShow === true ? setIsShow(false) : setIsShow(true);
  };
  useEffect(() => {
    // const $ = document.querySelector('.section-banner');
    // $.addEventListener('click', () => {
    //   setIsShow(false);
    // })
    const $$ = document.querySelector('.js-close');
    $$.addEventListener('click', () => {
      console.log('123');
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