import React from 'react'
import Grid from '@mui/material/Grid';
import loginimg from '../../Assets/Login/login.png'
import './Login.css'

function Login() {
  return (
    <div>
      <Grid container>
         <Grid item md={6} className='frame-1'>
          <div className='firstdiv'>
            <img src={loginimg} alt='signimg' className='loginimg1' />
            <h2 className='LgHd'>Lorem ipsum dolor</h2>
             <p className='Lgpara'> 
                Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a<br /> urna at egestas egestas. 
                 Arcu quis est sit aliquam egestas purus<br /> pharetra risus consectetur.
                  Enim in leo scelerisque feugiat nislx nisi<br /> aenean. Enim egestas nunc tristique integer interdum.</p>
                  </div>
            </Grid>
        <Grid item md={6} className='frame-2'>
          <div className='seconddiv'>
        <h2 className='LgHd1'>Login</h2>
         <input type="email" placeholder='Email or Username' className='email'/><br></br>
         <input type="Password" placeholder='Password' className='password' /><br></br>
        <button  type='button'className='loginbtn'>Login</button><br /><br /> 
        <a href='#'className='forgotpwd'>Forgot password</a><br />
        <a href='#'className='forgotpwd1'>Don't have an Account? <a style={{color:'#53C352'}}>Sign Up</a></a><br />
              </div>
          </Grid>
      </Grid>
    </div>
  )
}

export default Login
