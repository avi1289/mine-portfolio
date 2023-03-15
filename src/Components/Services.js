import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import img from "../self.jpeg";
import logo from "../logo.svg";
import java from "./java-icon.png"
import srclogo from '../sourcelogo.png';
import Boxes from "../Boxes";
import Footer from "./Footer";

function Services() { 
  
  return (
    <>
      <Navbar />
      <div className="sercont">
        <h1>
          <span style={{ color: "red" }}>Our</span> Services
        </h1>
        <p>
          Me and My Teammates provides you high standard clean website for your
          business solutions
        </p>
      </div>

      <div className='sercontainer'>
        <Boxes src={logo}/>
        <Boxes src={java}/>
        <Boxes src={srclogo}/>
        <Boxes src={logo}/>
        <Boxes src={java}/>
        <Boxes src={srclogo}/>
      </div>
    </>
  );
}

export default Services;
