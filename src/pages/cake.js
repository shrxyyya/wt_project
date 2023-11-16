import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar1'
import imageOne from '../assets/cake1.jpeg'
import imageTwo from '../assets/cake2.jpeg'
import imageThree from '../assets/Lemon Blueberry Cheesecake Cake.jpeg'
import imageFour from '../assets/MOIST Carrot Cake With Cream Cheese Frosting _ Butternut Bakery.jpeg'
import imageFive from '../assets/Red Velvet Cake with Cream Cheese Frosting.jpeg'
import imageSix from '../assets/Rich Chocolate Loaf Cake with Baileys Original Irish Cream Cream Cheese Frosting.jpeg'
import '../styles/brownie.css'

function cake() {
  return (
    <div>
      <Navbar/>

      <div className="image-container">
        <div className="image-item">
          <Link to='https://www.elmundoeats.com/en/easy-cheesecake-cheesecake-factory-inspired/' style={{textDecoration:'none'}}>
          <img src={imageOne} alt="Cheesecake" />
          <p className='caption'>Cheesecake</p>
          </Link>
        </div>
        <div className="image-item">
        <Link to='https://japan.recipetineats.com/japanese-strawberry-sponge-cake-strawberry-shortcake/' style={{textDecoration:'none'}}>
          <img src={imageTwo} alt="Strawberry Vanilla sponge cake" />
          <p className='caption'>Strawberry Vanilla sponge cake</p>
          </Link>
        </div>
        <div className="image-item">
        <Link to='https://omgchocolatedesserts.com/lemon-blueberry-cheesecake-cake/' style={{textDecoration:'none'}}>
          <img src={imageThree} alt="Lemon Blueberry Cheese Cake" />
          <p className='caption'>Lemon Blueberry Cheese Cake</p>
          </Link>
        </div>
        <div className="image-item">
        <Link to='https://butternutbakeryblog.com/perfect-carrot-cake/' style={{textDecoration:'none'}}>
          <img src={imageFour} alt="Moist Carrot Cake" />
          <p className='caption'>Moist Carrot Cake</p>
          </Link>
        </div>
        <div className="image-item">
        <Link to='https://bakingenvy.com/red-velvet-cake-with-cream-cheese-frosting/' style={{textDecoration:'none'}}>
          <img src={imageFive} alt="Red Velvet Cake" />
          <p className='caption'>Red Velvet Cake</p>
          </Link>
        </div>
        <div className="image-item">
        <Link to='https://www.gatherandfeast.com/rich-chocolate-loaf-cake-baileys-cream-cheese-frosting' style={{textDecoration:'none'}}>
          <img src={imageSix} alt="Rich Chocolate Loaf Cake" />
          <p className='caption'>Rich Chocolate Loaf Cake</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default cake
