import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

// logo
import imgprof from "../../Assets/Writer-home/prof.png";
import Arrowdown from "../../Assets/Writer-home/Arrowdown.png";
import Arrowup from "../../Assets/Writer-home/Arrowup.png";
import Updatepassword from "../../Assets/Writer-home/updatepassword.png";
import customersupport from "../../Assets/Writer-home/customersupport.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { logOutUser } from "../../Redux/Slices/AuthSlice";

const Navbar = () => {
  const { token, UserType } = useSelector((state) => state.auth);

  const [screenWidth,setscreenWidth]=useState(window.innerWidth)

  const detectsize = () =>{
    setscreenWidth(window.innerWidth)
  }
    useEffect(()=>{
      
      window.addEventListener('resize',detectsize)

      return ()=>{
        window.removeEventListener('resize',detectsize)
      }
    },[screenWidth])
    
   
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const [display,setdisplay]=useState(false)
  const [open,setopen]=useState(false)
  console.log(open);

  const handleLogout = () =>{
    dispatch(logOutUser())
    }

  return (
    <>
      {
        screenWidth > 768 &&
        <Grid container>
        <Grid item md={3}>
          <h3 className="NAv-head">Script shop</h3>
        </Grid>
        <Grid item md={6}>
          <nav className="NAV-a">
            <a href="#" style={{ color: "#53C352" }}>
              Home
            </a>
            <a href="#">Features</a>
            <a href="#">Contact Us</a>
          </nav>
        </Grid>
        <Grid item md={3} position={'relative'}>
          {token === null && (
            <div className="BTn-div">
              <Link to={"/Login"}>
                <button className="NAv-btn">Login</button>
              </Link>
              <Link to={"/signup"}>
                <button className="NAv-btn">Sign Up</button>
              </Link>
            </div>
          )}
          {UserType === "Writer" && (
            <>
              <div className="Profile-Writer-head">
                <div onClick={()=>setdisplay(!display)} className="Profile-Writer">
                  <img src={imgprof} alt="img" className="Profile-Writer-img" />
                  <img
                    src={display? Arrowup : Arrowdown}
                    alt="img"
                    className="Profile-Writer-Arrow"
                  />
                </div>
                <button className="Profile-Writer-button">Followers 100</button>
              </div>
              {
                display &&
              <div className="dropdown-list-W">
                <ul>
                  <li>
                    <AccountCircleIcon
                      sx={{
                        color: "#ffffff",
                        background: "#53C352",
                        borderRadius: "50%",
                        width:'15.83px',
                        height:'18.33px'
                      }}
                    />
                    <span>Profile</span>
                  </li>
                 <Link to={'/update-pass'} style={{textDecoration:'none'}}>
                  <li>
                    <img src={Updatepassword} alt="alr" />
                    <span>Update Password</span>
                  </li>
                 </Link>
                  <li>
                    <img src={customersupport} alt="alr" />
                    <span>Customer Support</span>
                  </li>
                  <li>
                    <img src={customersupport} alt="alr" />
                    <span>Privacy & Policy</span>
                  </li>
                  <li onClick={handleLogout}>
                    <LogoutIcon
                      sx={{
                        color: "#53C352",
                        width:'15.83px',
                        height:'18.33px'
                      }}
                      />
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
              }
            </>
          )}
          {UserType === "Director" && <>
              <div className="Profile-Writer-head">
                <div onClick={()=>setdisplay(!display)} className="Profile-Writer">
                  <img src={imgprof} alt="img" className="Profile-Writer-img" />
                  <img
                    src={display? Arrowup : Arrowdown}
                    alt="img"
                    className="Profile-Writer-Arrow"
                  />
                </div>
              </div>
              {
                display &&
              <div className="dropdown-list-W">
                <ul>
                  <li>
                    <AccountCircleIcon
                      sx={{
                        color: "#ffffff",
                        background: "#53C352",
                        borderRadius: "50%",
                        width:'15.83px',
                        height:'18.33px'
                      }}
                    />
                    <span>Profile</span>
                  </li>
                  <li>
                    <img src={Updatepassword} alt="alr" />
                    <span>Update Password</span>
                  </li>
                  <li>
                    <img src={customersupport} alt="alr" />
                    <span>Customer Support</span>
                  </li>
                  <li>
                    <img src={customersupport} alt="alr" />
                    <span>Privacy & Policy</span>
                  </li>
                  <li onClick={handleLogout}>
                    <LogoutIcon
                      sx={{
                        color: "#53C352",
                        width:'15.83px',
                        height:'18.33px'
                      }}
                      />
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
              }
            </>
            }
        </Grid>
      </Grid>
}
{
  screenWidth < 769 &&
  <Grid container justifyContent={'flex-end'}>
    <img onClick={()=>setopen(!open)} src={Arrowdown} alt="hamburger"  />
    {
    open &&
      <div style={{position:'absolute',top:'10%',left:'10%'}}>
      <ul>
        <li>home</li>
      </ul>
    </div>
    }

  </Grid>
}
    </>
  );
};

export default Navbar;
