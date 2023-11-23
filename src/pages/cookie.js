import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar1'
import imageOne from '../assets/Lemon Blueberry Cookies - Stephanie Sweet Treats.jpeg'
import imageTwo from '../assets/Linzer cookies Italian stawberry jam.jpeg'
import imageThree from '../assets/Salted Caramel Chocolate Chip Cookie Bars.jpeg'
import imageFour from '../assets/The Best Caramel Apple Cookies - Crumbl Copycat.jpeg'
import imageFive from '../assets/cookie1.jpeg'
import imageSix from '../assets/Ccookie.jpg'
import Footer from '../components/footer';
import '../styles/brownie.css'


function cookie() {
  return (
    <div>
        <Navbar/>

        <div className="image-container">
        <div className="image-item">
          <Link to='https://stephaniessweets.com/chewy-lemon-blueberry-cookies/' style={{textDecoration:'none'}}>
          <img src={imageOne} alt="Lemon Blueberry Cookies" />
          <p className='caption'>Lemon Blueberry Cookies</p>
          </Link>
        </div>
        <div className="image-item">
          <Link to='https://pinabresciani.com/linzer-cookies-with-italian-strawberry-jam/' style={{textDecoration:'none'}}>
          
          <img src={imageTwo} alt="Italian strawberry jam Cookies" />
          <p className='caption'>Italian strawberry jam Cookies</p>
          </Link>
        </div>
        <div className="image-item">
          <Link to='https://www.closetcooking.com/salted-caramel-chocolate-chip-cookie-bars/' style={{textDecoration:'none'}}> 
          
          <img src={imageThree} alt="salted Caramel chocochip cookies" />
          <p className='caption'>salted Caramel chocochip cookies</p>
          </Link>
        </div>
        <div className="image-item">
          <Link to='https://lifestyleofafoodie.com/caramel-apple-cookies-crumbl-copycat/' style={{textDecoration:'none'}}>
          <img src={imageFour} alt="Caramel Apple Cookies" />
          <p className='caption'>Caramel AppleCookies</p>
          </Link>
        </div>
        <div className="image-item">
          <Link to='https://bakedabundance.com/eggless-chocolate-chip-cookies/' style={{textDecoration:'none'}}>
         
          <img src={imageFive} alt="eggless Chocochip Cookies" />
          <p className='caption'>Eggless Chocochip Cookies</p>
          </Link>
        </div>
        <div className="image-item">
          <Link to='https://www.tastesoflizzyt.com/bakery-style-chocolate-chip-cookies-recipe/' style={{textDecoration:'none'}}>
             <img src={imageSix} alt="Chocochip Cookies" />
          <p className='caption'>Chocochip Cookies</p>
          </Link>
        </div>
      </div>

      <Footer/>  
    </div>
  )
}

export default cookie
