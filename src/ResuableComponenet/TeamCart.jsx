import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FiFacebook } from 'react-icons/Fi';
import { AiOutlineWhatsApp } from 'react-icons/Ai';

import { FiTwitter } from 'react-icons/Fi';
// import { AiOutlineTwitter } from 'react-icons/Ai';
// import { IoLogoWhatsapp } from 'react-icons/Io';

import { SiGmail } from 'react-icons/Si';
const TeamCart = ({img,title,subtitle}) => {
    return (
        <div className='w-[340px] rounded-3xl bg-[rgb(233,242,254)] duration-500 hover:shadow-2xl shadow-md relative group  h-[390px] group overflow-hidden '>
            <img className='absolute bottom-0 z-10 w-[500px] group-hover:scale-110 duration-700' src={img} alt="" />
         <Zoom>   <div className=' rounded-3xl -right-20 h-[0px] z-0 w-[0px] group-hover:h-[400px] group-hover:w-[300px]  bg-gradient-to-b from-[rgb(85,170,244)] to-[rgb(129,171,226)] absolute top-10   duration-700 '>

</div></Zoom>
<div className=' group-hover:h-[120px] left-10 overflow-hidden duration-500 grid justify-items-center bg-white shadow-2xl  absolute top-40 h-[0px] w-[30px] rounded-3xl'>
    {/* <FiFacebook/>
    <AiOutlineTwitter/>
    <IoLogoWhatsapp/>
    <BiLogoGmail/> */}

  <div className='opacity-0 group-hover:opacity-100 top-2 absolute translate-y-[140px] group-hover:translate-y-0 duration-500'>
   <p className='mt-2'><FiFacebook/></p>
   <p className='mt-2'><SiGmail size={15}/></p>
   <p className='mt-2'><AiOutlineWhatsApp size={15}/></p>
   <p className='mt-2'><FiTwitter /></p>
   </div>
 

</div>
<div className='absolute text-gray-700 top-5 left-10'>
<p className='detailFont text-[20px] font-semibold'>{title}</p>
<p className='detailFont text-[13px] font-thin'>{subtitle}</p>
</div>



            
        </div>
    );
};

export default TeamCart;