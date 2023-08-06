import React from 'react';
import { Fade } from 'react-awesome-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

const AnimatedCart = ({img,text,details}) => {
    return (
        <div className='group relative h-[430px] w-[340px]'>
            <img  className='h-[380px] object-cover rounded-3xl w-[340px] absolute z-0 top-0' src={img} alt="" />

            <div className='w-full h-0 group-hover:h-[380px] rounded-3xl duration-200 absolute top-0 bg-black bg-opacity-60 z-10'>
                <Fade><p className='mx-5 my-10 opacity-0 group-hover:opacity-100 text-white text-[18px] '>{details}</p></Fade>
        
            </div>
            <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-right"  className='bg-[rgb(233,241,253)] shadow-2xl opacity-100 group-hover:opacity-0 duration-500 right-8 absolute bottom-20 w-full rounded-3xl p-4 m-4 '>
            <p className='my-auto font-serif font-semibold'>{text}</p>
            </div>
            
        </div>
    );
};

export default AnimatedCart;