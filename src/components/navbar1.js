import React from 'react';
import Logo from "../assets/logo2.png";
// import Heading from "../assets/heading.png";
import "../styles/navbar1.css";
import { Link } from 'react-router-dom';
import OwnRecipe from '../pages/ownRecipe';
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
        <h1 style={{ margin: '0', cursor: 'pointer' }}>B A K E Z Y</h1>
      </div>
          <Link to='/OwnRecipe' style={{textDecoration:'none'}}>
      <div className='right side'>
        <button className="button"  style={{color:'brown'}}>ADD</button>     
      </div>
      </Link>

    </div>

  );
}


export default Navbar;
