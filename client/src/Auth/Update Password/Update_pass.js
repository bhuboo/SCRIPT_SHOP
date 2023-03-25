import { Grid } from '@mui/material'
import React from 'react'
import './Update_pass.css'
import uppwd from '../../Assets/updatepwd/updpwd.png'

function Update_pass() {
  return (
    <div>
      <Grid container>
         <Grid item md={5}>
           <div className='pwdframe'>
           <h3 className='uphd'>Update your password</h3>
           <input type="email" placeholder='Current Password' className='Cpwd'/><br></br>
           <input type="Password" placeholder='New Password' className='Cpwd' /><br></br>
           <input type="Password" placeholder='Confirm  Password' className='Cpwd' /><br></br>
           <button  type='button'className='pwdbtn'>Update</button><br /><br /> 
           </div>
        </Grid>
          <Grid item md={7}>
            <div className='pwdframe1'>
              <img src={uppwd} alt='uppwd'className='pwdimg' />
              </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Update_pass
