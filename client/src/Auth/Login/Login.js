import React, { useState,useEffect } from "react";
import Grid from "@mui/material/Grid";
import loginimg from "../../Assets/Login/login.png";
import logo1 from "../../Assets/Login/logo1.png";
import logo2 from "../../Assets/Login/logo2.png";
import logo3 from "../../Assets/Login/logo3.png";

import {Link,useNavigate} from 'react-router-dom'
import "./Login.css";
import { useDispatch,useSelector } from "react-redux";
import { loginDirector, loginWriter } from "../../Redux/Slices/AuthSlice";

function Login() {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const auth = useSelector((state)=>state.auth)

  const [display, setDisplay] = useState(false);
  const [value, setvalue] = useState("Writer");

  const [Writer, setWriter] = useState({
    Email: "",
    Password: "",
  });

  const [Director, setDirector] = useState({
    Email: "",
    Password: "",
  });

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(value === "Writer"){
      function handleSubmitWriter(e){
        dispatch(loginWriter(Writer))
      }
      handleSubmitWriter(e)
    }else if(value === "Director"){
      function handleSubmitDirector(e){
        dispatch(loginDirector(Director))
      }
      handleSubmitDirector(e)

    }
  }

  useEffect(() => {
    if(auth.UserType === "Writer"){
      navigate('/WriterHome')
    }else if(auth.UserType === "Director"){
      navigate('/update-pass')
    }
  }, [auth.UserType,navigate])
  

  


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
          <h2 className="LgHd1">{value=== "Writer" ? "Writer Login" : "Director Login" }</h2>
          <form className="form-style" onSubmit={handleSubmit}>
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
           {
            value === "Writer" &&
            <>
            <input
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Email"
                  onChange={(e) =>
                    setWriter({ ...Writer, Email: e.target.value })
                  }
                />
                <input
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Password"
                  onChange={(e) =>
                    setWriter({ ...Writer, Password: e.target.value })
                  }
                />
                <input
              className="button-submit-sign"
              type="submit"
              value={"Login"}
              />
              </>
          } 
           {
            value === "Director" &&
            <>
            <input
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Email"
                  onChange={(e) =>
                    setDirector({ ...Director, Email: e.target.value })
                  }
                />
                <input
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Password"
                  onChange={(e) =>
                    setDirector({ ...Director, Password: e.target.value })
                  }
                />
                <input
              className="button-submit-sign"
              type="submit"
              value={"Login"}
              />
              </>
          } 
          </form>
          <h6 className="forgotpwd">Forgot password?</h6>
          <h6 className="forgotpwd1">Don’t have an Account? <Link className="signuplink" to={"/signup"}>Sign Up</Link></h6>
          </div>
        </Grid>
      </Grid>
    </>
    // <div>
    //   <Grid container>
    //     <Grid item md={6} className="frame-1">
    //       <div className="firstdiv">
    //         <img src={loginimg} alt="signimg" className="loginimg1" />
    //         <h2 className="LgHd">Lorem ipsum dolor</h2>
    //         <p className="Lgpara">
    //           Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a
    //           <br /> urna at egestas egestas. Arcu quis est sit aliquam egestas
    //           purus
    //           <br /> pharetra risus consectetur. Enim in leo scelerisque feugiat
    //           nislx nisi
    //           <br /> aenean. Enim egestas nunc tristique integer interdum.
    //         </p>
    //       </div>
    //     </Grid>
    //     <Grid item md={6} className="frame-2">
    //       <div className="seconddiv">
    //         <h2 className="LgHd1">Login</h2>
    //         <input
    //           type="email"
    //           placeholder="Email or Username"
    //           className="email"
    //         />
    //         <br></br>
    //         <input
    //           type="Password"
    //           placeholder="Password"
    //           className="password"
    //         />
    //         <br></br>
    //         <button type="button" className="loginbtn">
    //           Login
    //         </button>
    //         <br />
    //         <br />
    //         <a href="#" className="forgotpwd">
    //           Forgot password
    //         </a>
    //         <br />
    //         <a href="#" className="forgotpwd1">
    //           Don't have an Account? <a style={{ color: "#53C352" }}>Sign Up</a>
    //         </a>
    //         <br />
    //       </div>
    //     </Grid>
    //   </Grid>
    // </div>
  );
}

export default Login;
