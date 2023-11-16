// cupcake.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar1';
import Imageone from '../assets/Blueberry Waffle Cupcakes - Katie Cakes.jpeg';
import Imagetwo from '../assets/Caramel Mocha Cupcakes.jpeg';
import Imagethree from '../assets/Nutella Bueno Cupcakes.jpeg';
import Imagefour from  '../assets/Raspberry Chocolate Cupcakes (1).jpeg';
import Imagefive from '../assets/Funfetti Vanilla Cupcakes (1).jpeg';
import Imagesix from '../assets/White Chocolate Cupcakes - In Bloom Bakery.jpeg';
import '../styles/cupcake.css'

function Cupcake() {
  return (
    <div>
      <Navbar />
     
      <div className="image-container">
        <div className="image-item">
          <Link to='https://www.iheartkatiecakes.co.uk/2021/04/blueberry-waffle-cupcakes.html'style={{textDecoration:'none'}}>
          <img src={Imageone} alt="Blueberry Waffle Cupcakes" />
          <p className='caption'>Blueberry Waffle Cupcakes</p>
          </Link>
        </div>
        <div className="image-item">
          <Link to='https://thecakeblog.com/2017/10/caramel-mocha-cupcakes.html' style={{textDecoration:'none'}}>
          <img src={Imagetwo} alt="Caramel Mocha Cupcakes" />
          <p className='caption'>Caramel Mocha Cupcakes</p>
          </Link>
        </div>
        <div className="image-item">
        <Link to='https://thebakingexplorer.com/nutella-bueno-cupcakes/' style={{textDecoration:'none'}}>
          <img src={Imagethree} alt="Nutella Bueno Cupcakes" />
          <p className='caption'>Nutella Bueno Cupcakes</p>
          </Link>
        </div>
        <div className="image-item">
        <Link to='https://handletheheat.com/raspberry-chocolate-cupcakes/' style={{textDecoration:'none'}}>
          <img src={Imagefour} alt="Raspberry Chocolate Cupcakes" />
          <p className='caption'>Raspberry Chocolate Cupcakes</p>
          </Link>
        </div>
        <div className="image-item">
        <Link to='https://thebakingexplorer.com/funfetti-vanilla-cupcakes/' style={{textDecoration:'none'}}>
          <img src={Imagefive} alt="Funfetti Vanilla Cupcakes" />
          <p className='caption'>Funfetti Vanilla Cupcakes</p>
          </Link>
        </div>
        <div className="image-item">
        <Link to='https://inbloombakery.com/white-chocolate-cupcakes/' style={{textDecoration:'none'}}>
          <img src={Imagesix} alt="White Chocolate Cupcakes" />
          <p className='caption'>White Chocolate Cupcakes</p>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Cupcake;
