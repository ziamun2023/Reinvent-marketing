import React, { useState } from 'react';
import back from '../../assets/Icon.png'


const Sliders = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
    return (
        <>
           <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="slider ">
      <div className="slider-wrapper  " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
     
        {slides.map((slide, index) => (
          <div className="slide testimoni relative  " key={index}>
            {slide}
         
          </div>
        ))}
      
      </div>

    </div>
    <div className='absolute right-20'>
      <button className="previous-btn " onClick={handlePrevious}><img className='w-10 py-3 px-3 border rounded-full border-gray-300 rotate-180' src={back} alt="" /></button>
          <button className="next-btn " onClick={handleNext}><img className='w-10 py-3 px-3 border rounded-full border-gray-300 ' src={back} alt="" /></button></div> 
        </>
    );
};

export default Sliders;