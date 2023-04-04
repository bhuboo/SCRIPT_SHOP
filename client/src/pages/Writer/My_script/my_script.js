import React from 'react'
import products from './product.json'
import './my_script.css'
import {Card,  Grid} from '@mui/material'
function my_script() {
  return (
    <>
        <p className='hdscript'>Your Scripts</p>
      <Grid container>
        <Grid 
         item 
         md={12} 
         className="main_card" 
         justifyContent={"center"}
        >
          {products?.map((product,key) =>(
           <Card className='matrixcard'>
          <p className='matrixname'>{product.name}</p>
          <button className='scriptbtn'>Edit Script Detais</button>
        </Card>
      )  )}
        </Grid>
        </Grid>
    </>
  )
}

export default my_script
