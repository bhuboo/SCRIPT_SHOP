import React from 'react'
import './Footer.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <div>
         <Box sx={{ width: '100%' }} className="Grid-Footer">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={3} >
            <p className='Footer-Gpara'>Script shop</p>
            <p  className='Footer-Gpara1'>
            Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a urna at egestas egestas. Arcu quis est sit aliquam egestas purus pharetra risus consectetur. Enim in leo scelerisque feugiat nisl nisi aenean. Enim egestas nunc tristique integer interdum.

            </p>
        
        </Grid>
        <Grid item xs={3}>
        <p className='Footer-Gpara'>Script shop</p>
        <p className='Footer-Gpara1'>
            Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a urna at egestas egestas. Arcu quis est sit aliquam egestas purus pharetra risus consectetur. Enim in leo scelerisque feugiat nisl nisi aenean. Enim egestas nunc tristique integer interdum.

            </p>
          
        </Grid>
        <Grid item xs={3}>
        <p  className='Footer-Gpara'>Script shop</p>
        <p  className='Footer-Gpara1'>
            Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a urna at egestas egestas. Arcu quis est sit aliquam egestas purus pharetra risus consectetur. Enim in leo scelerisque feugiat nisl nisi aenean. Enim egestas nunc tristique integer interdum.

            </p>
          
        </Grid>
        <Grid item xs={3}>
        <p  className='Footer-Gpara'>Script shop</p>
        <p  className='Footer-Gpara1'>
            Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a urna at egestas egestas. Arcu quis est sit aliquam egestas purus pharetra risus consectetur. Enim in leo scelerisque feugiat nisl nisi aenean. Enim egestas nunc tristique integer interdum.

            </p>
          
          
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Footer