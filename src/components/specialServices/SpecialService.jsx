import React from 'react';
import img1 from "../../assets/img1.jpg"
const SpecialService = () => {
    return (
        <div>
            <div className=' bg-gradient-to-b from-[rgb(46,136,217)] to-[rgb(28,99,194)] w-[600px] rounded-r-full h-[140px] '>
            <p  style={{fontWeight:700}}  className='my-component lg:my-12 mb-7  text-3xl lg:text-4xl text-center pt-12  text-black '>Our best serivces</p>
            </div>
            <div className='lg:grid lg:grid-cols-2'>
                <div>
                    

                </div>
                <div className='grid grid-cols-2'>
<div  className='w-[300px] relative   h-[300px]'>
   <div className=''> <img className='w-[300px] h-[370px] absolute z-20  rotate-12 object-cover  rounded-3xl ' src={img1} alt="" /></div>
    <p className='text-blue-500 font-bold absolute top-0 rotate-12 z-30 bg-white rounded-3xl px-3 shadow-inner '>@PinkVilla</p>
    <div className='w-[300px] h-[370px] shadow-2xl bg-gradient-to-b from-[rgb(255,207,90)] to-[rgb(255,167,17)] absolute -top-4 z-0  -left-2 rotate-12 rounded-3xl'>
       

    </div>

</div>

<div  className='w-[200px] relative mt-20   h-[270px]'>
   <div className=''> <img className='w-[200px] h-[270px] absolute z-20  rotate-12 object-cover  rounded-3xl ' src={img1} alt="" /></div>
    <p className='text-blue-500 font-bold absolute top-0 rotate-12 z-30 bg-white rounded-3xl px-3 shadow-inner '>@PinkVilla</p>
    <div className='w-[200px] h-[270px] shadow-2xl bg-gradient-to-b from-[rgb(111,160,230)] to-[rgb(225,236,251)] absolute -top-4 z-0  -left-2 rotate-12 rounded-3xl'>
       

    </div>

</div>
<div  className='w-[200px] relative mt-12   h-[270px]'>
   <div className=''> <img className='w-[200px] h-[270px] absolute z-20  rotate-12 object-cover  rounded-3xl ' src={img1} alt="" /></div>
    <p className='text-blue-500 font-bold absolute top-0 rotate-12 z-30 bg-white rounded-3xl px-3 shadow-inner '>@PinkVilla</p>
    <div className='w-[200px] h-[270px] shadow-2xl bg-gradient-to-b from-[rgb(111,160,230)] to-[rgb(225,236,251)] absolute -top-4 z-0  -left-2 rotate-12 rounded-3xl'>
       

    </div>

</div>

<div  className='w-[320px]  relative mt-12  -ms-20 h-[200px]'>
   <div className=''> <img className='w-[320px] h-[200px] absolute z-20  rotate-12 object-cover  rounded-3xl ' src={img1} alt="" /></div>
    <p className='text-blue-500 font-bold absolute top-0 rotate-12 z-30 bg-white rounded-3xl px-3 shadow-inner '>@PinkVilla</p>
    <div className='w-[320px] h-[200px] shadow-2xl bg-gradient-to-b from-[rgb(111,160,230)] to-[rgb(225,236,251)] absolute -top-4 z-0  -left-2 rotate-12 rounded-3xl'>
       

    </div>

</div>


                </div>
                

            </div>

          
        </div>
    );
};

export default SpecialService;