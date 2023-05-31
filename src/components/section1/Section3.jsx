import React from 'react';
import hand from '../../assets/3d-hands-fun-and-wild-deal-via-phones-with-virtual-handshake.png'

const Section3 = () => {
    return (
        <div className='grid grid-cols-2 justify-items-center mx-20'>
           <div className='ms-10'>
            <p style={{fontWeight:600}}  className='my-component my-12  text-2xl text-black'>Win-Win for Brands and Reviewers</p>
            <p  className='  text-[rgb(70,70,98)] headerText'>Empower your brand with Sharks Marketing. Generate positive reviews, enhance product visibility, and drive sales growth on E-commerce Platforms. Reach your target audience effortlessly through targeted reviewers, manage reputation effectively, and foster customer loyalty.Reviewers benefit by receiving free or exclusive discounted high-quality products in exchange for their honest and unbiased reviews.</p>
            </div> 
            <div>
                <img className='w-2/3 ms-20' src={hand} alt="" />
            </div>
        </div>
    );
};

export default Section3;