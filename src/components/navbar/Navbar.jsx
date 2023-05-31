import React, { useState } from 'react';
import Menu from '../humburger/Menu';
import logo from '../../assets/LogoSharks Marketing Logo Black Text[1].png'
// import { slide as Menu } from 'react-burger-menu'
import { LuAlignJustify } from "react-icons/lu";

const Navbar = () => {


    const [isOpen,setIsOpen]=useState(false)
   



    return (
        <div className='flex justify-between  rounded-lg shadow-md shadow-gray-300 justify-center mx-12 h-[64px]'>
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
                <button className=' bg-[rgb(251,188,29)] hover:bg-[rgb(167,137,63)] hover:-translate-y-1 duration-200 w-[128px] h-[40px]  my-auto rounded-xl pt-[8px] pb-[8px] my-auto  me-4'>
Call Us Now

                </button>
              <div className='lg:hidden'>
              <span className="material-icons menu-btn " onClick={() => setIsOpen(true)}>
        <LuAlignJustify/>
      </span>
      <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
              </div>
              
            </div>
            
        </div>
    );
};

export default Navbar;