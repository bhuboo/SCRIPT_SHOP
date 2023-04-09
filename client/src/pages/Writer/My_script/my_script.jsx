import React, { useEffect, useState } from 'react'
import './my_script.css'
import {Card,  Grid} from '@mui/material'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { UserScript } from '../../../Redux/Slices/ScriptSlice'
function my_script() {

  const {email} =useSelector(state=>state.auth)
  const [Email,setemail]=useState('');
  const {Scriptlist} =useSelector(state=>state.script.ScriptList)

  console.log(Scriptlist)

  const dispatch =useDispatch();

  useEffect(()=>{
    setemail(email)
    dispatch(UserScript(email));
  },[email,Email])
  return (
    <>
    <Navbar/>
        <p className='hdscript'>Your Scripts</p>
      <Grid container>
        <Grid 
         item 
         md={12} 
         className="main_card" 
         justifyContent={"center"}
        >
          {Scriptlist?.map((item,key) =>(
           <Card className='matrixcard'>
          <p className='matrixname'>{item.Moviename}</p>
          <button className='scriptbtn'>Edit Script Detais</button>
        </Card>
      )  )}
        </Grid>
        </Grid>
        <Footer/>
    </>
  )
}

export default my_script
