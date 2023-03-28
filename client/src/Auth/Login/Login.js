import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import loginimg from "../../Assets/Login/login.png";
import logo1 from "../../Assets/Login/logo1.png";
import logo2 from "../../Assets/Login/logo2.png";
import logo3 from "../../Assets/Login/logo3.png";

import {Link} from 'react-router-dom'
import "./Login.css";

function Login() {

  const [display, setDisplay] = useState(false);
  const [value, setvalue] = useState("Writer");

  return (
    <>
      <Grid container>
        <Grid
          item
          md={6}
          className="frame-1"
          justifyContent={"center"}
          alignItems={"start"}
          display={"grid"}
        >
          <div className="frame1-div">
          <img src={loginimg} alt="signimg" className="loginimg1" />
          <h2 className="LgHd">Lorem ipsum dolor</h2>
          <p className="Lgpara">
            Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a
            urna at egestas egestas. Arcu quis est sit aliquam egestas purus
            pharetra risus consectetur. Enim in leo scelerisque feugiat nisl
            nisi aenean. Enim egestas nunc tristique integer interdum.
          </p>
          </div>
        </Grid>
        <Grid
          item
          md={6}
          className="frame-2"
          justifyContent={"center"}
          display={"grid"}
        >
          {/* img logo 1 */}
          <img src={logo1} alt="" className="logo1img"/>
          <img src={logo2} alt="" className="logo2img"/>
          <img src={logo1} alt="" className="logo3img"/>
          <img src={logo2} alt="" className="logo4img"/>
          <img src={logo3} alt="" className="logo5img"/>
          <div className="frame2-div">
          <h2 className="LgHd1">Login</h2>
          <form className="form-style">
          <div
              onClick={() => setDisplay(!display)}
              className={display ? "div-form1" : "div-form"}
            >
              <p className={display ? "div-span-form" : "div-span-value"}>
                {value}
              </p>
              <span
                onClick={() => {
                  setvalue("Writer");
                  setDisplay(false);
                }}
                className={display ? "div-span-form1" : "div-span-form"}
              >
                writer
              </span>
              <span
                onClick={() => {
                  setvalue("Director");
                  setDisplay(false);
                }}
                className={display ? "div-span-form1" : "div-span-form"}
              >
                director
              </span>
            </div>
            <input
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Email"
                  // onChange={(e) =>
                  //   setDirector({ ...Director, Email: e.target.value })
                  // }
                />
                <input
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Password"
                  // onChange={(e) =>
                  //   setDirector({ ...Director, Password: e.target.value })
                  // }
                />
                <input
              className="button-submit-sign"
              type="submit"
              value={"Login"}
            />
          </form>
          <h6 className="forgotpwd">Forgot password?</h6>
          <h6 className="forgotpwd1">Don’t have an Account? <Link className="signuplink" to={"/signup"}>Sign Up</Link></h6>
          </div>
        </Grid>
      </Grid>
    </>
    
  );
}

export default Login;
