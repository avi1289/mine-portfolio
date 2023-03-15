import React from 'react'
import Navbar from './Navbar'
import img from '../self.jpeg'



import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

function Home() {
  const nav = useNavigate()
  
  const Fetchresume = ()=>{
    nav('/resume');
  }
  return (
    <>
      <Navbar/>
      <div className='cont'>
        <div className='imgCont'>
          <img className='self' src={img} alt="" />
        </div>
        <div className='textCont'>
          <h1 className='name'>Mr. Abhi Saxena</h1>
          <p className='desp'>Hey i am <b style={{color:'red'}}>Mern Stack</b><br></br>Developer</p>
          <p className='about'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ea tempore. Sit tempora hic enim laboriosam in eligendi sunt iusto reiciendis, ipsum possimus autem maxime excepturi dolor id dignissimos ea!</p>
         
          <button className='cv-btn' type='button' onClick={Fetchresume}>Download CV</button>
          
        </div>        
      </div>
      <div className='simple-line'></div>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Home