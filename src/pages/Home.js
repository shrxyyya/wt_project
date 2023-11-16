import React from 'react'
import Navbar from '../components/navbar';
import FirstSection from '../components/firstSection';
import Categories from '../components/categories';
import Footer from '../components/footer';

function Home() {
  return (
    <div>
      <Navbar/>
      <FirstSection/>
      <Categories/>
      <Footer/>
    </div>
  )
}

export default Home;
