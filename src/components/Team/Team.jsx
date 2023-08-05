import React from 'react';
import TeamCart from '../../ResuableComponenet/TeamCart';
import img from "../../assets/teammember2.png"
import img2 from "../../assets/teammember1.png"
import img3 from "../../assets/teammember3.png"

const Team = () => {
    return (
        <div>
             <p data-aos="fade-down"  style={{fontWeight:"700"}}  className='my-component lg:my-12 mx-5 text-center text-4xl mt-12 lg:text-5xl text-black'> Meet Our Expert Team Member? </p>

          <div className='lg:grid lg:grid-cols-3 justify-items-center'>
          <TeamCart img={img} title={"Jennie Watson"} subtitle={"CEO Write Master"}/>
          <TeamCart img={img2} title={"Karry Milton"} subtitle={"Manager HR Bank"}/>
          <TeamCart img={img3} title={"David John"} subtitle={"Film director"}/>
          </div>
        </div>
    );
};

export default Team;