import React from 'react'
import logo from './logo.svg'

function Boxes(props) {
  return (
    <div className={"boxes"}>
          <div className="circle">
            <img src={props.src} alt="" />
          </div>
          <div className="shape">
            <div className="content">
            
              <h3>Front End Development</h3>
              <p>           
              We Provide quality Product and single page application with
                React js
              </p>
            
            </div>
          </div>
        </div>
  )
}

export default Boxes