import React, { useState } from 'react';
import firstSlide from "../assets/brownies.jpg";
import secondSlide from "../assets/cake.jpg";
import thirdSlide from "../assets/cookie.jpg";
import fourthSlide from "../assets/cupcake.jpg";
import "../styles/firstSection.css"; // make sure to create the corresponding CSS file

const slides = [firstSlide, secondSlide, thirdSlide, fourthSlide];

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="slider-button prev">
        {'<'}
      </button>
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button onClick={nextSlide} className="slider-button next">
        {'>'}
      </button>
    </div>
  );
}

export default ImageSlider;
