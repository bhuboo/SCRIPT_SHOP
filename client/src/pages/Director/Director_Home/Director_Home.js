import React, { useEffect } from 'react'
import products from './product.json'
import {Card, Grid} from '@mui/material'
import './Director_Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Director_Home() {

  const navigate=useNavigate();
  const auth = useSelector((state)=>state.auth)

  useEffect(() => {
    if(auth.UserType === "Writer"){
      navigate('/WriterHome')
    }else if(auth.UserType === "Director"){
      navigate('/Director_Home')
    }else if(auth.token === null){
      navigate('/')
    }
  }, [auth.UserType,navigate])
  return (
    <div>
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
        <Grid item
         md={"10.1"}
         >
        <p className='director_Hd'>Choose Your Dream Script</p>
        </Grid>
        <Grid 
        item 
        md={12} 
        className="main_card" 
        justifyContent={"center"}
        >
          {products?.map((product,key) =>(
           <Card className='dir_card'>
          <p className='home_name'>{product.name}</p>
          <button className='alex_btn'>By Alex</button>
          <button className='purchase'>Purcharse</button>
        </Card>
      )  )}
        </Grid>
        </Grid>
    </div>
  )
}

export default Director_Home

