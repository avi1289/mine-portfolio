import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../logo.svg'
import Contact from "./Contact";

function Navbar() {
  return (
    <>
      <div className="Nav-cont">
          <ul className="list">
            <li><NavLink  to='/' ><img className="img" src={logo} alt="logo" /></NavLink></li>
            <li  className="li"><NavLink className='lis' to='/'>Home</NavLink></li>
            <li className="li"><NavLink className='lis' to='/about'>About</NavLink></li>
            <li className="li"><NavLink className='lis' to='/services'>Services</NavLink></li>
            <li className="li"><NavLink className='lis' to='/project'>Project</NavLink></li>
            <li className="li"><NavLink className='lis' to={'/blog'}>Blog</NavLink></li>
          </ul>
          <button className="btn"><NavLink className='lis' to={'/contact'}>Contact US</NavLink></button>
      </div>
    </>
  );
}

export default Navbar;
