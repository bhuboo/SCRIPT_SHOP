import React, { useState } from "react";
import "./Reg.css";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import {registerUser,registerDirector} from "../../Redux/Slices/AuthSlice"
import image from "../../Assets/Signup/signup(1).png";
import image1 from "../../Assets/Signup/signup.png";

function Reg() {
  const dispatch = useDispatch();

  const [display, setDisplay] = useState(false);
  const [value, setvalue] = useState("Writer");
  const [Writer, setWriter] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [Director, setDirector] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(value === "Writer"){
      function handleSubmitWriter(e){
        dispatch(registerUser(Writer))
      }
      handleSubmitWriter(e)
    }else if(value === "Director"){
      function handleSubmitDirector(e){
        dispatch(registerDirector(Director))
      }
      handleSubmitDirector(e)

    }
  }

  
  return (
    <>
      <Grid container>
        <Grid
          className="Grid-First"
          item
          md="6"
          justifyItems={"center"}
          alignContent={"start"}
          display={"grid"}
        >
          <div className="first-div-g">
            <img className="image-first" src={image} alt="" />
            <h3 className="heading-first-g">Lorem ipsum dolor</h3>
            <p className="para-first-g">
              Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Nisl ut
              lectus volutpat a urna at egestas egestas. Arcu quis est sit
              aliquam egestas purus pharetra risus consectetur. Enim in leo
              scelerisque feugiat nisl nisi aenean. Enim egestas nunc tristique
              integer interdum.
            </p>
          </div>
        </Grid>
        <Grid
          className="Grid-Second"
          item
          md="6"
          justifyItems={"center"}
          alignContent={"start"}
          display={"grid"}
        >
          <img className="image-second" src={image1} alt="" />
          <h1 className="heading-second-g">
            {value === "Director" ? "Director Sign up" : "Writer Sign up"}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="form-style"
          >
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
            {value === "Writer" && (
              <>
                <input
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Username"
                  onChange={(e) =>
                    setWriter({ ...Writer, Username: e.target.value })
                  }
                />
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
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    setWriter({ ...Writer, ConfirmPassword: e.target.value })
                  }
                />
              </>
            )}
            {value === "Director" && (
              <>
                <input
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Username"
                  onChange={(e) =>
                    setDirector({ ...Director, Username: e.target.value })
                  }
                />
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
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    setDirector({
                      ...Director,
                      ConfirmPassword: e.target.value,
                    })
                  }
                />
              </>
            )}
            <input
              className="button-submit-sign"
              type="submit"
              value={"Sign up"}
            />
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default Reg;
