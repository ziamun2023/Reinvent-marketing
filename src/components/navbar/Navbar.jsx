import React, { useState } from "react";
import { BsInfoCircle } from 'react-icons/Bs';
import { MdOutlineAnalytics } from 'react-icons/Md';
import { AiOutlineQuestionCircle } from 'react-icons/Ai';
import { MdOutlineFeaturedPlayList } from 'react-icons/Md';
import { AiOutlineVideoCameraAdd } from 'react-icons/Ai';
import { MdOutlineDesignServices } from 'react-icons/Md';
import { BsSearchHeartFill } from 'react-icons/Bs';
import { AiOutlineGoogle } from 'react-icons/Ai';
import { FaBlogger } from 'react-icons/Fa';
import { RiCustomerServiceFill } from 'react-icons/Ri';
import { BiMobileAlt } from 'react-icons/Bi';
// import { RiCustomerService2Fill } from 'react-icons/Ri';
// import { TbDeviceMobileHeart } from 'react-icons/Tb';
import { SiMicrosoftteams } from 'react-icons/Si';
import { CgWebsite } from 'react-icons/Cg';
import { TbBrandApplePodcast } from 'react-icons/Tb';
import { ImPriceTag } from 'react-icons/Im';
import { FaFacebookF } from 'react-icons/Fa';
import { FaMedal } from 'react-icons/Fa';
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
// import logo from '../../assets/LogoReinvent Marketing Logo Black Text[1].png'
// import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between  rounded-lg shadow-md shadow-gray-300 lg:mx-36 mx-0 h-[64px] ">
        <div className="my-auto">
          {/* <img className='w-24 ms-4 my-auto ' src={} alt="" /> */}
        </div>

        <div className="flex my-auto">
          <div className="font-medium  my-auto mx-3 lg:block hidden"><Link>Home</Link></div>
          <div className="font-medium group relative  my-auto mx-3 lg:block hidden">
            Services
            <div className="w-[700px] grid   grid-cols-2 group-hover:opacity-100  duration-300 group-hover:h-[400px]  h-0 absolute   z-30 -right-5 rounded-3xl bg-white shadow-2xl ">
              <div className="group-hover:flex  hidden flex-col gap-8 mt-12 mx-auto ">
               <Fade direction="up">
               <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><FaFacebookF size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Facebook Promotion</p>
               </div>
             
               </Fade>
             <Link to='/seo'>  <Fade direction="up">
               <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><BsSearchHeartFill size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">SEO optimization</p></div>
               </Fade></Link>
              <Fade direction="up">
              <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><AiOutlineGoogle size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Google Local Listing</p></div>
              </Fade>
              <Fade direction="up">
              <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><RiCustomerServiceFill size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Customer Management</p></div>
              </Fade>
           
            
              </div>
              {/* <div className="w-[1px]  my-10 h-[500px] bg-gray-700"></div> */}
              <div className=" group-hover:flex  hidden flex-col gap-8  mt-12 x-auto">
                
           <Fade direction="up">   <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><TbBrandApplePodcast size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Brand Marketing</p></div></Fade>
           <Fade direction="up">   <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><BiMobileAlt size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Social media growth</p></div></Fade>
             <Fade direction="up">
             <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><FaBlogger size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Blog promotion</p></div>
             </Fade>
             <Fade direction="up">
             <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><FaMedal size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Reputation management</p></div>
             </Fade>
                
            
              </div>
            </div>

          </div>
          <div className="font-medium  duration-300 group relative group my-auto mx-3 lg:block hidden">
            pages
            <div className="w-[430px] grid   grid-cols-2 group-hover:opacity-100  duration-300 group-hover:h-[300px]  h-0 absolute   z-30 -right-5 rounded-3xl bg-white shadow-2xl ">
              <div className="group-hover:flex  hidden flex-col gap-8 mt-12 mx-auto ">
               <Fade direction="up">
               <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><BsInfoCircle size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">about us</p></div>
               </Fade>
               <Fade direction="up">
               <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><AiOutlineQuestionCircle size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">why us</p></div>
               </Fade>
              <Fade direction="up">
              <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><MdOutlineAnalytics size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Case study</p></div>
              </Fade>
           
            
              </div>
              {/* <div className="w-[1px]  my-10 h-[500px] bg-gray-700"></div> */}
              <div className=" group-hover:flex  hidden flex-col gap-8  mt-12 x-auto">
                
           <Fade direction="up">   <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><MdOutlineFeaturedPlayList size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Features</p></div></Fade>
           <Fade direction="up">   <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><SiMicrosoftteams size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Our team</p></div></Fade>
             <Fade direction="up">
             <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><ImPriceTag size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Our pricing</p></div>
             </Fade>
                
            
              </div>
            </div>
          </div>
          <div className="font-medium  duration-300 group relative group my-auto mx-3 lg:block hidden">
            Digital products
            <div className="w-[430px] grid   grid-cols-2 group-hover:opacity-100  duration-300 group-hover:h-[300px]  h-0 absolute   z-30 -right-5 rounded-3xl bg-white shadow-2xl ">
              <div className="group-hover:flex  hidden flex-col gap-8 mt-12 mx-auto ">
               <Fade direction="up">
               <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><BsInfoCircle size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Logo Making</p></div>
               </Fade>
               <Fade direction="up">
               <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><AiOutlineQuestionCircle size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Video editing</p></div>
               </Fade>
              <Fade direction="up">
              <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><MdOutlineAnalytics size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Graphic design</p></div>
              </Fade>
           
            
              </div>
              {/* <div className="w-[1px]  my-10 h-[500px] bg-gray-700"></div> */}
              <div className=" group-hover:flex  hidden flex-col gap-8  mt-12 x-auto">
                
           <Fade direction="up">   <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><CgWebsite size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Website development</p></div></Fade>
           <Fade direction="up">   <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><MdOutlineDesignServices size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Ui/Ux</p></div></Fade>
             <Fade direction="up">
             <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"><AiOutlineVideoCameraAdd size={30}/></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto"> Video editing</p></div>
             </Fade>
                
            
              </div>
            </div>
          </div>
          <div className="border-l border-gray-600  my-auto me-3 lg:block hidden"></div>
          <div className="grid justify-items-center shadow-md shadow-gray-400 hover:bg-[rgb(19,11,4)] hover:text-white duration-200 bg-[rgb(251,188,29)] my-auto  mx-2 text-center rounded-2xl lg:rounded-3xl px-3 py-2 font-medium ">
            {" "}
            <div>
              <groupton className=" flex  ps-2">Call us Now</groupton>
            </div>{" "}
          </div>
          <div class="dropdown dropdown-end lg:hidden">
            <label tabindex="0" class="btn m-1">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Benefits</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}


export default Navbar;
