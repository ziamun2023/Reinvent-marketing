import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/Bs';
import { AiOutlineHeart } from 'react-icons/Ai';
import { AiOutlineEye } from 'react-icons/Ai';
import { FcMoneyTransfer } from 'react-icons/Fc';
const ProductCart = ({title,img,description,subtitle,price,Profile}) => {
    const [status,setStatus]=useState(false)
    const seeDetails=()=>{
        setStatus(true)
    }
    const closebutton=()=>{
        setStatus(false)
    }
   
    return (
        <div className=' group shadow-2xl  overflow-hidden relative lg:grid lg:grid-rows-2 gap-40  rounded-2xl h-[500px] w-[360px]'>
          <div className='mx-10 '>
          <img className='w-[270px]  object-cover my-5 group-hover:scale-105 duration-700' src={img} alt="" />
          </div>
         
        <div className='ms-5 group-hover:scale-90  duration-200'>
        <p className='detailFont4 rounded-md  w-[300px] text-[17px] my-2'>{title}</p>
          <p className='flex rouded-full  justify-start text-black'><p><FcMoneyTransfer size={30}/></p><p className='my-auto font-semibold text-blue-600'>{price} $</p></p>
        <div className='flex my-2'>
        <p className='font-semibold detailFont4'>profile:</p><p className='font-serif mx-2'>{Profile}</p>
        </div>
          <div className="rating w-20">
  <input type="radio" name="rating-1" className="mask mask-star bg-blue-300" />
  <input type="radio" name="rating-1" className="mask mask-star bg-blue-300"  />
  <input type="radio" name="rating-1" className="mask mask-star bg-blue-300" />
  <input type="radio" name="rating-1" className="mask mask-star bg-blue-300" />
  <input type="radio" name="rating-1" className="mask mask-star bg-blue-300" />
</div>


        </div>
        <div className='absolute group-hover:-translate-y-[20px]  right-28 pt-2 z-20   hover:text-gray-900  translate-y-[300px] text-center font-serif  rounded-xl flex  justify-center hover:bg-gradient-to-l from-[rgb(112,181,212)] to-[rgb(213,231,245)]  duration-500 shadow-inner shadow-gray-400 w-[120px] h-[40px] bottom-0'>
<p> Contact now</p>
</div>
        <div className='absolute group-hover:-translate-y-[20px]  right-2 pt-2 z-20 hover:bg-blue-300 hover:text-gray-900  translate-y-[660px] text-center font-serif  duration-700  rounded-xl flex  justify-center bg-gradient-to-l from-[rgb(122,191,223)] to-[rgb(213,231,245)]   shadow-inner shadow-gray-400 w-[90px] h-[40px] bottom-0'>
<p onClick={seeDetails}> Details</p>
</div>
 

       
{
            status &&<div onClick={closebutton} className={` duration-200 bg-black bg-opacity-60 w-[360px] ${status?"h-[500px] duration-200" :"h-0 duration-200"} absolute    z-20  left-0   shadow-inner shadow-gray-500`}>
           
            <p className='text-white p-10'>{description}</p>
            <p className='bg-blue-300 p-4 text-center absolute bottom-0 w-full hover:bg-blue-500 duration-300'>close</p>
            </div>
        }  
        
        </div>
    );
};

export default ProductCart;