import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProBox from "./ProBox";
import logo from './resume/fb.png'
import pro1 from './resume/copycol.PNG'

function Project() {
  const [shape,setelem] = useState();
  const [box,setbox] = useState();
  const[boxes,setBoxes] = useState([1,2,3]);
  var boxSize = 6;
  useEffect(()=>{
    createDiv();
  },[])
  const createDiv =  ()=>{
    
    const shape  =  React.createElement('div',{className:'shape'})
    const box  =  React.createElement('div',{className:'boxes'})
    setbox(box);
    setelem(shape)
    

  }
  return (
    <>
      <Navbar />
      
      <div className="sercont">
        <h1>
          <span style={{ color: "red" }}>Some</span> Projects
        </h1>
        <p>We provide high standar clean website for your business solutions</p>
      </div>
      <>
      <ProBox proName ={pro1}/>
      <ProBox proName ={pro1}/>
      <ProBox proName ={pro1}/>
      <ProBox proName ={pro1}/>
      <ProBox proName ={pro1}/>
      <ProBox proName ={pro1}/>
      </>
      
    </>
  );
}

export default Project;
