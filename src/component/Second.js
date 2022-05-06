import React from 'react'
import Logo from "../component/Image1/mexycombs.jpeg"
// import Linkedin from "../component/Image1/linkedin.png"
// import Twitter from "../component/Image1/twitter.png"
import { Link } from 'react-router-dom'

import './second.css'
import Linkedin from "../component/Image1/linkedin.png"
import Twitter from "../component/Image1/twitter.png"



const Second = () => {
  return (
    <div className='second'>
        
        <section>

            <div>
            <h4>HI THERE</h4>
            <h3>I'M EMEKA NZEAKOR</h3>
            <h1>A TOUCH NOTCH DEVELOPER , WRITER AND MENTOR</h1>

            <div className ="small">
            <img src={Linkedin} alt="alt" className='llin'/>
            <img src={Twitter} alt="alt" /> 
            </div>

            </div>


         <div className  ="img-container">
             <div className='icons'>
             <img src={Linkedin} alt="alt" className='lin' />
            <img src={Twitter} alt="alt" /> 
            </div>
            <img src={Logo} alt="Log" className='man'/>


            </div>

        </section>

        <div className ="about">
            <h1>ABOUT ME</h1>
            <div className ="about1">
            <h6>Emeka Nzeakor is a passionate and goal driven Techpreneur whose interest is in using technology to build solutions to  solve real world problems.</h6>
            <img src={Linkedin} alt="alt" />
            <img src={Twitter} alt="alt" /> 
            </div>
        </div>
    </div>
  )
}

export default Second