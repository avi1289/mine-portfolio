import React from 'react'
import githtub  from './resume/github.png'
import fb from './resume/fb.png'
import LI from './resume/in.png';
import insta from './resume/insta.png'

function Footer() {
    const handleClick = (url)=>{
        window.open(url,'_blank')
    }
  return (
    <>
        <div className="fot-cont">
        <ul className='ul'>
            <li><img src={githtub} alt="" onClick={()=>handleClick('https://github.com/avi1289')}></img></li>
            <li><img src={fb} alt="" onClick={()=>handleClick('https://www.facebook.com/')}/></li>
            <li><img src={LI} alt="" onClick={()=>handleClick('https://www.linkedin.com/in/abhi-saxena-9b35a6185/')} /></li>
            <li><img src={insta} alt="" onClick={()=>handleClick('https://www.instagram.com/risv.89/')} /></li>
            </ul>
           <p style={{fontWeight:'bold' ,color:'white'}}>@ 2023 - comes creativity from mern stack</p> 
        </div>
    </>
  )
}

export default Footer