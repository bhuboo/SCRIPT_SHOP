import React, {  useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import { FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {
   
   

  return (
             <div >
              <Grid container>
                <Grid item md={3}>
                  <h3 className='NAv-head' >Script shop</h3>

                </Grid>
                <Grid item md={6}>
                  <nav className='NAV-a' >
                    <a href='/#' style={{color: "#53C352"}}>Home</a>
                    <a href='/#'>Features</a>
                    <a href='/#'>Contact Us</a>
                    
                  </nav>

                </Grid>
                <Grid item md={3}>
                  <div className='BTn-div'>
                  <button className='NAv-btn'>Login</button>
                  <Link to={"/signup"}><button  className='NAv-btn'>Sign Up</button></Link> 
                  </div>

                </Grid>

                

              </Grid>


            </div>
    
        

   
  )
}

export default Navbar