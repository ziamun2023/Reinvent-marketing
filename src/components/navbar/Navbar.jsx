import React, { useState } from 'react';

import logo from '../../assets/LogoSharks Marketing Logo Black Text[1].png'
// import { slide as Menu } from 'react-burger-menu'


const Navbar = () => {


    const [isOpen,setIsOpen]=useState(false)
   



    return (
       <>
        <div className='flex justify-between  rounded-lg shadow-md shadow-gray-300 lg:mx-36 mx-0 h-[64px] '>
       
            <div className='my-auto'>
            <img className='w-24 ms-4 my-auto ' src={logo} alt="" />
            </div>
          
         
            <div className='flex my-auto'>
                <div className='font-medium  my-auto mx-3 lg:block hidden'>
                    Home
                </div>
                <div className='font-medium  my-auto mx-3 lg:block hidden'>
                    Benefits
                </div>
                <div className='font-medium  my-auto mx-3 lg:block hidden'>
                    FAQ 
                </div>
                <div className='border-l border-gray-600  my-auto me-3 lg:block hidden'>
                     
                </div>
                <button className=' bg-[rgb(251,188,29)] hover:bg-[rgb(167,137,63)] hover:-translate-y-1 duration-200 w-[128px] h-[40px]  rounded-xl pt-[8px] pb-[8px] my-auto  me-4'>
Call Us Now

                </button>
                <div class="dropdown dropdown-end lg:hidden">
  <label tabindex="0" class="btn m-1"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
            
              
            </div>
            
            
        </div>
      

</>
    );
};

export default Navbar;

