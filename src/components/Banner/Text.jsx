
import React, { useEffect, useRef } from 'react';
import img1 from '../../assets/hero-testimonial-2.jpg (2).png'
import img2 from '../../assets/hero-testimonial-2.jpg (3).png'
import img3 from '../../assets/hero-testimonial-2.jpg (4).png'
import img4 from '../../assets/hero-testimonial-2.jpg (5).png'
import img5 from '../../assets/hero-testimonial-2.jpg (6).png'
import img6 from '../../assets/hero-testimonial-2.jpg (7).png'
import img7 from '../../assets/hero-testimonial-2.jpg (8).png'
import img8 from '../../assets/hero-testimonial-2.jpg (9).png'

const Text = () => {
   
    return (
      <div className='comments relative'>
<div className='comment absolute opacity-0'>
<div className='avatar'><img className='w-10 rounded-full' src={img1} alt="" /></div>
<div className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, one.</div>
</div>
<div className='comment absolute opacity-0'>
<div className='avatar'><img className='w-10 rounded-full' src={img2} alt="" /></div>
<div className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, two.</div>
</div>
<div className='comment absolute opacity-0'>
<div className='avatar'><img className='w-10 rounded-full' src={img3} alt="" /></div>
<div className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, three.</div>
</div>
<div className='comment absolute opacity-0'>
<div className='avatar'><img className='w-10 rounded-full' src={img4} alt="" /></div>
<div className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, four.</div>
</div>
<div className='comment absolute opacity-0'>
<div className='avatar'><img className='w-10 rounded-full' src={img5} alt="" /></div>
<div className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, five.</div>
</div>
{/* <div className='comment absolute opacity-0'>
<div className='avatar'><img className='w-10 rounded-full' src={img6} alt="" /></div>
<div className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem.</div>
</div> */}
{/* <div className='comment absolute opacity-0'>
<div className='avatar'><img className='w-10 rounded-full' src={img7} alt="" /></div>
<div className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem.</div>
</div> */}
{/* <div className='comment absolute opacity-0'>
<div className='avatar'><img className='w-10 rounded-full' src={img8} alt="" /></div>
<div className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem.</div>
</div> */}
      </div>
    );
};

export default Text;