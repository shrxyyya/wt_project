// Categories.js
import React from 'react';
import { Link } from 'react-router-dom';
import brownie from "../assets/Cbrownie.png";
import cookie from "../assets/Ccookie.jpg";
import cupcake from "../assets/Ccupcake3.jpeg";
import cake from "../assets/Ccake.jpeg";
import "../styles/categories.css";

function Categories() {
  return (
    <div className="categories">
      <div className="imageHolder">
        <Link to="/brownie"  style={{textDecoration:'none'}}>
          <img src={brownie} alt="brownies" className="image" />
        
        <p className="caption">BROWNIES</p>
        </Link>
      </div>
      <div className="imageHolder">
        <Link to="/cookie"  style={{textDecoration:'none'}}>
          <img src={cookie} alt="cookies" className="image" />
        
        <p className="caption">COOKIES</p>
        </Link>
      </div>
      <div className="imageHolder">
        <Link to="/cupcake"  style={{textDecoration:'none'}}>
          <img src={cupcake} alt="cupcakes" className="image" />
       
        <p className="caption">CUPCAKES</p>
        </Link>
      </div>
      <div className="imageHolder">
        <Link to="/cake" style={{textDecoration:'none'}}>
          <img src={cake} alt="cakes" className="image" />
       
        <p className="caption">CAKES</p>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
