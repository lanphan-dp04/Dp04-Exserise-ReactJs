import React from 'react';
import LogoHeader from './logo/LogoHeader';
import Nav from './nav/Nav';
import NavMobile from './nav/NavMobile';

const Header = () =>  {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <NavMobile/>
          <LogoHeader/>
          <Nav/>
        </div>
      </div>
    </header>
  )
}

export default Header