import React, { useEffect, useState } from 'react'
import './my_script.css'
import {Card,  Grid} from '@mui/material'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import { useSelector } from 'react-redux'
function my_script() {

  const {Scriptlist} =useSelector(state=>state.script.ScriptList)

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
