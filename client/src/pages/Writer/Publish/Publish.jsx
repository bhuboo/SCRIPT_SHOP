import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "./Publish.css";
import publish from "../../../Assets/publish/Asset 2@4x 1.png";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import LogoutIcon from "@mui/icons-material/Logout";

const Publish = () => {

  const [Script,setScript]=useState({
    MovieName:"",
    Synopsis:"",
    Genre:"",
    ScriptType:"",
    ScriptFile:"",
  });

  console.log(Script);

  const handlePdfchange = (e) =>{
    let selectedFile=e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = (e) =>{
      setScript({...Script,ScriptFile:e.target.result});
    }
  }

  return (
    <>
      <Navbar/>
      <Grid container md={10} justifyContent={"center"}>
        <Grid item md={3}>
          <div className="publish-div">
            <h3 className="Publish-heading">Publish Your Script</h3>
            <form className="Publish-form">
              <input
                className="Publish-Writer"
                type="text"
                id=""
                placeholder="Movie Name"
                onChange={(e) =>
                  setScript({ ...Script, MovieName: e.target.value })
                }
              />
              <input
                className="Publish-Writer"
                type="text"
                placeholder="Synopsis"
                onChange={(e) =>
                  setScript({ ...Script, Synopsis: e.target.value })
                }
              />
              <input
                className="Publish-Writer"
                type="text"
                placeholder="Genre"
                onChange={(e) =>
                  setScript({ ...Script, Genre: e.target.value })
                }
              />
              <input
                className="Publish-Writer"
                type="text"
                placeholder="Script Type"
                onChange={(e) =>
                  setScript({ ...Script, ScriptType: e.target.value })
                }
              />
              <label className="Publish-Writer fileLabel" htmlFor="file">
                {" "}
                <LogoutIcon
                  sx={{
                    color: "#53C352",
                    width: "15.83px",
                    height: "18.33px",
                    transform: "rotate(-90deg)",
                  }}
                />
                Upload Script
              </label>
              <input
                style={{ display: "none" }}
                className="Publish-Writer"
                type="file"
                id="file"
                accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handlePdfchange}
              />
              <input
                className="button-submit-Writer"
                type="submit"
                value={"Publish"}
              />
            </form>
          </div>
        </Grid>
        <Grid item md={3}>
          <p className="second-para">
            {" "}
            <span className="ipsum-span">Lorem ipsum dolor </span> sit amet
            consectetur. Sagittis mauris felis et eget. Ultrices tortor non
            nulla sagittis pretium etiam ultricies.
            <br />
            Lorem ipsum dolor sit amet consectetur. Sagittis mauris felis et
            eget. Ultrices tortor non nulla sagittis pretium etiam ultricies.
          </p>
        </Grid>
        <Grid item md={3}>
          {/* {
            Script.ScriptFile? <embed
            src={Script.ScriptFile}
            type="application/pdf"
            frameBorder="0"
            scrolling="auto"
            height="100%"
            width="100%"
        ></embed> :
          <img className="publish-img" src={publish} alt="publish" />
          } */}
          <img className="publish-img" src={publish} alt="publish" />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Publish;
