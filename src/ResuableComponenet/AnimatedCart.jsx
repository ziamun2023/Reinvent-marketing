import React from 'react';
import { Fade } from 'react-awesome-reveal';


const AnimatedCart = ({img,text,details}) => {
    return (
        <div className='group relative h-[380px] w-[340px]'>
            <img  className='h-[380px] object-cover rounded-3xl w-[340px] absolute z-0 top-0' src={img} alt="" />

            <div className='w-full h-0 group-hover:h-full duration-200 absolute top-0 bg-black bg-opacity-30 z-10'>
                <Fade><p className='mx-5 my-2 opacity-0 group-hover:opacity-100 text-white'>{details}</p></Fade>
        
            </div>
            <div className='bg-[rgb(233,241,253)] absolute bottom-0 h-11 w-full rounded-3xl p-10 '>
                <p>{text}</p>
            </div>
            
        </div>
    );
};

export default AnimatedCart;