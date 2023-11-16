import React from 'react';
import Logo from "../assets/logo2.png";
// import Heading from "../assets/heading.png";
import "../styles/navbar.css";
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

function Navbar() {
  return (
    <div className="navbar" >
      <div className="leftside"></div>
      <Link to="/">
        <img src={Logo} style={{
          width: '75px',
          height: '75px',
          background: 'none',
          cursor: 'pointer'
        }}
        />
      </Link>

      <div className="center" style={{ color: ' brown' }} >

        {/* <img src={Heading} style={{
          
          width:'70px',
          height:'70px'
        }} /> */}
        <h1 style={{ margin: '0' }}>B A K E Z Y</h1>
      </div>

      
    </div>

  );
}


export default Navbar;
