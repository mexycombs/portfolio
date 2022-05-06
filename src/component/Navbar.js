import React from 'react'
import { Link } from "react-router-dom"
import Linkedin from "../component/Image1/linkedin.png"
import Twitter from "../component/Image1/twitter.png"
import './Navbar.css'

const Navbar = () => {
  return (
    <div>

        <header>
        <div className="logo">
            <h1>Emeka Nzeakor</h1>
        </div>
        <nav className='nav'> 
      


            <ul >
                
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Project">Project</Link></li>
                <li><Link to="/ContactMe">Contact Me</Link></li>
                
                <li className='linkedin in'> <Link to="/" ><img src={Linkedin} alt="alt" /> </Link></li>
                <li className='in twit'> <Link to="/" ><img src={Twitter} alt="alt" /> </Link></li>
            </ul>
        </nav>
        </header>

    </div>
  )
}

export default Navbar