import React, { useEffect, useRef, useState } from 'react'
import resume from './resume/Resume.pdf';

function Resume() {
  const progres = useRef();
  const [val,seval] = useState();
  useEffect(()=>{
    seval(progres.current.value)
    
  },[])
  return (
    <>
      <div className='contres'>
        <h1>Curriculum vitae</h1>
        <div className='info'>
          <h1>Abhi Saxena</h1>
          <p>Add: Ganipur Jogpur nawabganj,<br></br>
              Dist: Farrukhabad<br></br>
              Pin: 209625</p>
        </div>
        <div className='cont-info'>
          <h1>Contact Information</h1>
          <p><b>Mobile No. : </b><span style={{color:'green'}}>+91 6386284611</span><br></br>
          <b>Email : </b><span style={{color:'green'}}> rishavfbd0@gmail.com</span><br></br>
          <b>Email : </b><span style={{color:'green'}}> abhi.21scse2030243@galgotiasuniversity.edu</span></p>
        </div>
        <div className='line'></div>
        <div className='data'>
          <h3>Career Objective :</h3>
          <p>Seeking an opportunity to work, To obtain and secure a position that will enable me to use my organizational skills as well as my ability to work well with people., I want to work in suitable environment that would challenge my technical skills  and give me proper direction.</p>
        </div>
        <div className='data'>
          <h3>Academic Credential :</h3>
          <ul>
            <li>Matric  from SKM inter college from farrukhabad  in 2016<span style={{color:'green',fontWeight:'bold'}}> (Percentage : 72).</span></li>
            <li>Passed intermediate from farrukhabad SKM inter college in 2019<span style={{color:'red',fontWeight:'bold'}}> (Percentage : 69.6).</span></li>
            <li>Graduate  <b>BCA</b> from makhanlal chaturvedi univeristy in 2021 <span style={{color:'green',fontWeight:'bold'}}> (Percentage : 78.9).</span></li>
            <li>PostGraduate <b>MCA</b> from Galgotias univeristy in 2023 <span style={{color:'green',fontWeight:'bold'}}> (Percentage : 70).</span></li>
          </ul>

          <div className='data'>
            <h3>Strength  :</h3>
            <ul>
              <li>Dedicated to do work untill finished</li>
              <li>Ability to work in organizational culture</li>
              <li>Solving Complex problem </li>
              <li>Motivated which is comes from future imagination result</li>
            </ul>
          </div>

          <div className='data'>
            <h3>IT Skills :</h3>
            <ul>
            <li style={{fontWeight:'bold'}}>Java Core : <progress value = "98" max="100" ></progress> 98%</li>
            <li style={{fontWeight:'bold'}}>JavaScript : <progress value = "90" max="100" ref={progres}></progress>{val}%</li>
            <li style={{fontWeight:'bold'}}>React JS : <progress value = "80" max="100" ></progress>                 80%</li>
            <li style={{fontWeight:'bold'}}>Node JS : <progress value = "10" max="100" ></progress>                 80%</li>
            </ul>
          </div>
  
        </div>
      </div>

    </>
  )
}

export default Resume