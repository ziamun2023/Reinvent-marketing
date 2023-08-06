import React from 'react';
import paper from "../assets/paperplane.gif"
const ConnectUs = () => {
    return (
       <div className='lg:grid lg:grid-cols-2 my-28'> 
       
        <div className='relative' >
            <div className='lg:w-[500px] grid justify-items-center z-10 bg-white shadow-2xl left-28 absolute  lg:h-[580px]'>
         


<div className='w-full px-10 mt-20'>

 <div className=''>
 <p className='font-serif text-gray-600'>Name</p>
    <input className='border-0 w-full ' placeholder='your name' type="text" name='name' />
    <hr />
 </div>
 <div className='mt-10'>
 <p className='font-serif text-gray-600'>Email</p>
    <input className='border-0 w-full ' placeholder=' email' type="text" name='name' />
    <hr />
 </div>
 <div className='mt-10'>
 <p className='font-serif text-gray-600'>Subject</p>
    <input className='border-0 w-full ' placeholder='your name' type="text" name='name' />
    <hr /> 
 </div>
 <div className='mt-10'>
 <p className='font-serif text-gray-600'>Message</p>
    <input className='border-0 w-full h-[80px] '  type="text" name='name' />
    <hr />
 </div>

 <p className='w-40 mt-10 h-10 group relative overflow-hidden border-2 border-blue-300 rounded-xl shadow-2xl text-black z-20'><p className='absolute top-1 font-semibold left-5 z-20'>Submit now</p> <p className='bg-blue-300 z-10 absolute -translate-x-[200px] top-0 group-hover:translate-x-0 w-40 h-20 duration-300 '></p></p>

</div>




            </div>
            <div className='absolute bg-blue-300 top-10  h-[570px] w-[500px] left-[140px] z-0'>

</div>
           

            
        </div>
        <div className='relative mt-20'>
            <p className='text-[rgb(249,183,114)] mx-20'>Get in touch</p>
            <p className='detailFont4 text-[35px] font-semibold text-start mx-20'>Meeting time shcedule</p>

            <p className='detailForm4 font-semibold my-10 mx-20'>
            Provide essential contact information, including your business's physical address, phone number, and email address
            </p>
            <p className='detailForm4 font-semibold my-10 mx-20'>
                Keep the form fields simple and relevant, such as name, email, subject, and message
              <br />  +885412569
              <p className='bg-blue-300 mt-16  shadow-lg w-20 text-black rounded-md p-2 hover:bg-blue-500 '>Whatsapp</p>
            </p>
       
<img className='absolute top-0 -left-[160px] z-0' src={paper} alt="" />

        </div>
       </div>
    );
};

export default ConnectUs;