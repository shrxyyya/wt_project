import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar1';
import imageOne from '../assets/brownie1.jpeg'
import imageTwo from '../assets/brownie2.jpeg'
import imageThree from '../assets/brownie3.jpeg'
import imageFour from '../assets/brownie4.jpeg'
import imageFive from '../assets/brownies.jpg'
import imageSix from '../assets/Cbrownie.png'
import '../styles/brownie.css'


function brownie() {
  return (
    <div>
       <Navbar/>
       <div className="image-container">
        <div className="image-item">
          <Link to='https://bakewithshivesh.com/biscoff-brownies-with-eggless-option/' style={{textDecoration:'none'}}>
          <img src={imageOne} alt="Biscoff Brownies" />
          <p className='caption'>Biscoff Brownies</p>
          </Link>
        </div>
        <div className="image-item">
          <Link to='https://dishingwithdelaney.com/orange-brownies/' style={{textDecoration:'none'}}>
          <img src={imageTwo} alt="COrange Brownies" />
          <p className='caption'>Orange Brownies</p>
          </Link>
        </div>
        <div className="image-item">
        <Link to='https://bakerbynature.com/oreo-brownies/'style={{textDecoration:'none'}}>
          <img src={imageThree} alt="Oreo Brownies" />
          <p className='caption'>Oreo Brownies</p>
          </Link>
        </div>
        <div className="image-item">
        <Link to='https://www.myrecipes.com/recipe/red-velvet-cheesecake-brownies?utm_source=pinterest.com&utm_medium=social&utm_campaign=myrecipes_myrecipes_15522750&utm_content=dessert_verticalimage&utm_term=Desserts_201911' style={{textDecoration:'none'}}>
          <img src={imageFour} alt="Red Velvet Cheesecake Brownies" />
          <p className='caption'>Red Velvet Cheesecake Brownies</p>
          </Link>
        </div>
        <div className="image-item">
        <Link to='' style={{textDecoration:'none'}}>
          <img src={imageFive} alt="eggless brownies" />
          <p className='caption'>Eggless Brownies</p>
          </Link>
        </div>
        <div className="image-item">
        <Link to='' style={{textDecoration:'none'}}>
          <img src={imageSix} alt="Belgium Brownies" />
          <p className='caption'>Belgium Brownies</p>
          </Link>
        </div>
      </div>
    </div>  
  )
}

export default brownie
