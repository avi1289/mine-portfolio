import React from 'react'

function ProBox({proName}) {
  return (
    <>
      <div className="boxes">
        <div className="shape"> 
          <img style={{width:'100%' ,height:'70%'}} src={proName} alt="" />
          <h1>Color Pallate</h1>
        </div>
      </div>
    </>
  )
}

export default ProBox