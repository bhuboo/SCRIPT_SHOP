import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import { FaBars, FaTimes } from "react-icons/fa";
import imgprof from '../../Assets/Writer-home/prof.png'
import Arrowdown from '../../Assets/Writer-home/Arrowdown.png'
import { useSelector } from "react-redux";

const Navbar = (Writer) => {
  const {token,UserType} = useSelector((state)=>state.auth)
 const [width,setwidth]=useState(window.innerWidth)

  console.log(width);
  return (
    <>
      {
        width >= "720" &&
      <Grid container>
        <Grid item md={3}>
          <h3 className="NAv-head">Script shop</h3>
        </Grid>
        <Grid item md={6}>
          <nav className="NAV-a">
            <a href="/#" style={{ color: "#53C352" }}>
              Home
            </a>
            <a href="/#">Features</a>
            <a href="/#">Contact Us</a>
          </nav>
        </Grid>
        <Grid item md={3}>
          {
            token === null && 
            <div className="BTn-div">
            <Link to={"/Login"}>
              <button className="NAv-btn">Login</button>
            </Link>
            <Link to={"/signup"}>
              <button className="NAv-btn">Sign Up</button>
            </Link>
          </div> 
          }
          {UserType === 'Writer' &&
          <div className="Profile-Writer-head">
          <div className="Profile-Writer">
            <img src={imgprof} alt="img" className="Profile-Writer-img"/>
            <img src={Arrowdown} alt="img" className="Profile-Writer-Arrow"/>
          </div>
          <button className="Profile-Writer-button">Followers 100</button>
          </div>
            }
          {
            UserType === 'Director' && 
            <button>Director</button>
          }
        </Grid>
      </Grid>
}
{
   width <= "720" &&
   <h1>navbar</h1>
}
    </>
  );
};

export default Navbar;
