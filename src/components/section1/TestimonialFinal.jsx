import React from 'react';
import Slider from './Slider';
import testimoni1 from '../../assets/hero-testimonial-2.jpg (4).png'
import testi2 from '../../assets/hero-testimonial-2.jpg (5).png'
import testi3 from '../../assets/hero-testimonial-2.jpg (6).png'
import testi4 from '../../assets/hero-testimonial-2.jpg (3).png'
import star from '../../assets/icons8-star-48.png'
import Sliders from './Sliders';

const TestimonialFinal = () => {
    const slides = [
        <div>    <div className=" lg:px-32 px-0  ">
        <div className='flex w-4 py-8'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
            <p className='detailFont  font-semibold  text-start  leading-snug text-4xl text-black'>Reinvent Marketing has been an incredible partner in helping us build our brand on Amazon. Their provides a unique opportunity to engage with Influencers and generate authentic reviews
    </p>
    <div className="flex  mt-10   gap-5">
    <div>
    <img className="w-14 rounded-full" src={testi2} alt="" />
    </div>
    <div>
    <p className="my-componen font-semibold text-black">    Sneha, Online Retailer</p>
    <p className="text-gray-600">  <small>Online retailer</small></p>
    
    </div>
    </div>
        </div></div>,
        <div>
                  <div className="lg:px-32 px-0 ">
            <div className='flex w-4 py-8'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
                <p className='detailFont  font-semibold  text-start  leading-snug text-4xl text-black'>Running campaigns with Reinvent Marketing has been a smart move for our business. They helped us overcome the challenge of getting enough reviews

</p>
<div className="flex mt-10 gap-5">
    <div>
      <img className="w-14 rounded-full" src={testimoni1} alt="" />
    </div>
    <div>
<p className="my-componen font-semibold text-black">   Rahul</p>
  <p className="text-gray-600">  <small>Founder of an E-commerce Brand
</small></p>

    </div>
</div>
            </div>
        </div>,
        <div>
      
    
      <div className="lg:px-32 px-0 ">
            <div className='flex w-4 py-8'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
                <p className='detailFont  font-semibold  text-start  leading-snug text-4xl text-black'>Reinvent Marketing has made the review generation process a breeze for us. Their team has been responsive and helpful every step of the way.

</p>
<div className="flex mt-10 gap-5">
    <div>
      <img className="w-14 rounded-full" src={testi3} alt="" />
    </div>
    <div>
<p className="my-componen font-semibold text-black">    Yash</p>
  <p className="text-gray-600">  <small> Ecommerce Sellerr</small></p>

    </div>
</div>
            </div></div>,
               <div>
                <div className="lg:px-32 px-0  ">
            <div className='flex w-4 py-8'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
                <p className='detailFont  font-semibold  text-start  leading-snug text-4xl text-black'>I was struggling to get reviews for my new product on Amazon. Thanks to Reinvent Marketing, I was able to launch my product successfully with a stream of positive reviews.
</p>
<div className="flex mt-10 gap-5">
    <div>
      <img className="w-14 rounded-full" src={testi4} alt="" />
    </div>
    <div>
<p className="my-componen font-semibold text-black">  Sezuti</p>
  <p className="text-gray-600">  <small>Ecommerce Seller
</small></p>

    </div>
</div>
            </div></div>,
        // Add more slides as needed
      ];
    return (
        <div>
        <h1 data-aos="flip-up" className='text-center detailFont text-4xl mt-14 font-bold'>Testimonial </h1>
        <Sliders slides={slides} />
        </div>
    );
};

export default TestimonialFinal;