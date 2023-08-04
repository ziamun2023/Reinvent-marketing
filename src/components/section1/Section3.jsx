import React from 'react';
import hand from '../../assets/photohandshake.png'


const Section3 = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 justify-items-center mx-5 my-14 lg:mx-40'>
           <div data-aos="zoom-in-up" className=' '>
            <p  style={{fontWeight:700}}  className='my-component lg:my-12 mb-7 my-0 text-3xl lg:text-4xl text-black '>Win-Win for Brands and Reviewers</p>
            <p  className='  text-[rgb(70,70,98)] headerText'>Empower your brand with Reinvent Marketing. Generate positive reviews, enhance product visibility, and drive sales growth on E-commerce Platforms. Reach your target audience effortlessly through targeted reviewers, manage reputation effectively, and foster customer loyalty. <br /> <br /> Reviewers benefit by receiving free or exclusive discounted high-quality products in exchange for their honest and unbiased reviews.</p>
            </div> 
            <div  data-aos="fade-left"   className='relative my-10'> 
        <img className='' src={hand} alt="" />
            </div>
        </div>
    );
};

export default Section3;