import React, { useRef, useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar'

function Contact() {
    const [message,setMessege] = useState('');
    const [sub,setSub] = useState('');
    const [mail,setMail] = useState('');
    const [number,setNumber] = useState('');
    const [Name,setName]  =useState('');

    const nameref = useRef();
    const [show,setShow] = useState(false);
    const handlebtn = (e)=>{
        setShow(true)
        e.preventDefault();
        console.log('hii');
        
    }
  return (
    <>
        <Navbar/>
        <div className='formcont'>
        <h1>{show?Name:null}</h1>
        <form onSubmit={handlebtn} className='form'>
            <input type="Name" value={Name} ref={nameref} placeholder='what is your name' onChange={(e)=>setName(preState=>preState=e.target.value)}/>
            <input type="text" value={number} placeholder='what is Contact Number' onChange={(e)=>setNumber(preState=>preState=e.target.value)}/>
            <input type="mail" value={mail} placeholder='what is your Mail ID' onChange={(e)=>setMail(preState=>preState=e.target.value)}/>
            <input type="subject" value={sub} placeholder='what is your subject' onChange={(e)=>setSub(preState=>preState=e.target.value)}/>
            <input type="text" value={message} placeholder='write something ...' onChange={(e)=>setMessege(preState=>preState=e.target.value)}/>
            <button className='cv-btn' type='submit' >Submit</button>
        </form>
        
        </div>
        
    </>
  )
}

export default Contact