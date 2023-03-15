import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import img from '../self.jpeg'

function About() {
  
  return (
    <>
      <Navbar />
      <div className="cont">
        <div className="imgCont">
        <img className='self' src={img} alt="" />
        </div>
        <div className="textabt">
        <h1>About<span style={{color:"aqua"}}> ME</span></h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum officia nam libero sit id voluptatem temporibus neque quo, non, sequi, culpa laudantium asperiores illum ab dolorum? Aspernatur quae eius officiis praesentium esse, eligendi tempora, odio temporibus laborum similique tempore nobis repudiandae? Iste.</p>
        </div>
      </div>
    </>
  );
}

export default About;
