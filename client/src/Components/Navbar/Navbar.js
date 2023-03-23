import React, {  useState } from 'react'
import './Navbar.css'

import { FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {
   
   

  return (
             <div className='nav-bar'>
              
              <span className='script-span'>Script Shop</span>
              <nav className='Nav-ulbar'>
                <a href='/#'>Home</a>
                <a href='/#'>Features</a>
                <a href='/#'>Contact Us</a>
                <div className='btn-div'>
                  <button className='NAv-btn'>Login</button>
                  <button className='NAv-btn'>Sign Up</button>
                </div>
                

              </nav>
              

              

            </div>
    
        

   
  )
}

export default Navbar