import { Grid } from "@mui/material";
import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import "./Writer_Home.css";

function Writer_Home() {
  return (
    <>
      <Navbar />
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
            <button className="div2-1child">Publish Script</button>
            <button className="div2-2child">My Scripts</button>
            <button className="div2-3child">Analytics</button>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Writer_Home;
