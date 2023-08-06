import React from 'react';
import { MdOutlineNavigateNext } from 'react-icons/Md';
const Pricing = () => {
    return (
      <div>
       
          <div className='group w-[350px] hover:bg-blue-200 duration-500 rounded-3xl grid  justify-items-center shadow-2xl'>
          <div className='my-12'>
          <p>STANDARD PLAN</p>
            <div className='flex'><p>$</p> <p className='font-bold detailFont4 text-5xl'>59</p ><p className='mt-4 font-bold'>/month</p></div>
            <p className='detailFont4 my-4 text-[10px] font-thin'>For individual developers </p>
            <div>
                <p className='detailFont4 mt-4 font-thin text-[14px]'>For individual  freelancers</p>
                <p className='detailFont4 mt-4 font-thin text-[14px]'>social media marketing</p>
                <p className='detailFont4 mt-4 font-thin text-[14px]'> individual developers</p>
                <p className='detailFont4 mt-4 font-thin text-[14px]'>12 blog post </p>
                <p className='detailFont4 mt-4 font-thin text-[14px]'>5 guest posting </p>
                <p className='detailFont4 mt-4 font-thin text-[14px]'>best service</p>
            </div>
          
            <div className='text-blue-600  flex mt-4 text-center w-[140px] h-[50px]    border-2 rounded-lg'>
              <p className='my-auto mx-auto'>  Start free trial</p>
              <p className='my-auto'> <MdOutlineNavigateNext/></p>
            </div>
          </div>
         
        </div>
      </div>
        
    );
};

export default Pricing;