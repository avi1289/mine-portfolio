import React from 'react'
import Navbar from './Navbar'

function Blog() {
  return (
    <>
      <Navbar/>
      <div className="sercont">
        <h1>
          <span style={{ color: "red" }}>Our</span> Services
        </h1>
        <p>
          Me and My Teammates provides you high standard clean website for your
          business solutions
        </p>
      </div>
    </>
  )
}

export default Blog