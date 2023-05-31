import React from 'react';
import photo1 from '../../assets/3d-casual-life-boy-with-megaphone (1).png'
const Section2 = () => {
    return (
        <div className='grid justify-items-center '>
             <p   style={{fontWeight:"700"}}  className='my-component my-12  text-5xl text-black'> How does the system work? </p>
            <div className='lg:flex  '>
                <div className='h-[590px]   bg-gradient-to-b from-[rgb(13,176,244)] to-[rgb(12,160,243)] '>

<img  className='' src={photo1} alt="" />

                </div>
                <div className='h-[870px] bg-gradient-to-b from-[rgb(255,167,17)] to-[rgb(255,199,75)]'>
         
</div>
<div className='h-[590px]  bg-gradient-to-b from-[rgb(248,63,51)] to-[rgb(248,63,51)]'>

</div>
            </div>
        </div>
    );
};

export default Section2;