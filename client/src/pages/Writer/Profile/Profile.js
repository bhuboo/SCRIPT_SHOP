import { Grid } from '@mui/material'
import React from 'react'
import Displaypic from '../../../Assets/Profilepictures/Dp.png'
import profilepic from '../../../Assets/Profilepictures/profilepic.png'
import "./Profile.css";
function Profile() {
  return (
    <div>
      <Grid container>
      <Grid
          item
          md={6}
          className="left"
          justifyContent={"center"}
          display={"grid"}
        >
            <Grid 
             item
             md={11.3}
             className="left"
             justifyContent={"center"}
             display={"grid"}
           >
       <img src={Displaypic} alt='Display' className='dp'/>
       </Grid>
     <input
                  className="textfield-title"
                  type="text"
                  id=""
                  placeholder="Email"
                                />
                                <input
                  className="textfield-title"
                  type="text"
                  id=""
                  placeholder="Username"
                                />
                                <input
                  className="textfield-title"
                  type="text"
                  id=""
                  placeholder="Business mail"
                                />
                                <input
                  className="textfield-title"
                  type="text"
                  id=""
                  placeholder="Phone number"
                                />
                                <input
              className="button-Update"
              type="submit"
              value={"Update"}
           />
           </Grid>
           <Grid
          item
          md={6}
          className="right"
          justifyContent={"center"}
          display={"grid"}
        >
          <div className="frame1-div">
          <img src={profilepic} alt="profilepic" className="profilepic" />
          </div>
          </Grid>
      </Grid>
    </div>
  )
}

export default Profile
