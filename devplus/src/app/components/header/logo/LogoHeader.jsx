import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/header/logo-ST.png';

const LogoHeader = () =>  {
  return (
    <div className="logo-wrapper">
      <Link className="nav-mobile-link" to={`/`}>
        <img src={logo} alt="logo-ST" />  
      </Link>
    </div>
  )
}

export default LogoHeader