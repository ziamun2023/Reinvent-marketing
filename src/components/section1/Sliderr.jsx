import React from 'react';

const Sliderr = (props) => {
// console.log(props.imglink)
    return (<>
    <div className="slider ">
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
          <button className="next-btn " onClick={handleNext}><img className='w-10 py-3 px-3 border rounded-full border-gray-300 ' src={back} alt="" /></button></div></>
    
    );
};
export default Sliderr;