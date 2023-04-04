import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import "./Writer_Home.css";

function Writer_Home() {
  const navigate = useNavigate();
  const { token, UserType } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    } else if (UserType === "Director") {
      navigate("/Director_Home");
    }
  }, [token]);
  return (
    <>
    <Navbar/>
      <Grid container justifyContent={"center"}>
        <Grid
          item
          className="first-G-WH"
          display={"grid"}
          justifyItems={"center"}
          alignItems={"center"}
        >
          <p className="first-G-para-WH">
            Lorem ipsum dolor sit amet consectetur. Habitant consectetur
            porttitor tincidunt sodales sed. Volutpat adipiscing diam porttitor
            arcu vulputate sed sit massa in. Amet sit est enim arcu purus.
            Consequat laoreet duis semper suspendisse id lorem egestas. Ultrices
            at iaculis vel arcu viverra rhoncus vulputate. Enim orci molestie
            auctor orci senectus aliquam dictum amet vitae. In id tortor etiam
            tempus. Dolor quis semper sed ac. Sed ultricies sed cras amet vel
            porta.
          </p>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          md={"8"}
          paddingBottom={"200px"}
        >
          <div className="second-HW-div">
            <h3 className="second-G-head-HW">Your Dashboard</h3>
          </div>
          <div className="second-HW-div2">
            <Link to={"/publish"}>
              <button className="div2-1child">Publish Script</button>
            </Link>
            <Link to={"/my-script"}>
              <button className="div2-2child">My Scripts</button>
            </Link>
            <Link to={"/analytics"}>
              <button className="div2-3child">Analytics</button>
            </Link>
          </div>
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
}

export default Writer_Home;
