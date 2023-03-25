import React from 'react'
import './Home_G.css'
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Landingimg from '../../Assets/Landing-img/landimg.png'
import Grid from '@mui/material/Grid';

const Home_G = () => {
  return (
    <div>
      <Grid container>
        <Grid item md={6}>
           <div>
            <p className='LA-para1'>Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a urnac at egestas egestas. Arcu quis est sit aliquam egestas purus pharetra risus consectetur. Enim in leo scelerisque feugiat nisl nis aenean. Enim egestas inunc tristique integer interdum.</p>
            <button className='Home_Gpara'>Publish Your First script</button>
            </div>
        
        </Grid>
        <Grid item md={6}>
        <div>
              <img className='LAnd-img' src={Landingimg} alt="l-img" />
            </div>
        
        </Grid>
        
      </Grid>

      <h3 className='HomeG-h3'>Benifits</h3>  
      <Grid container>
        <Grid item md={4}>
        <div className='Card-G'  >
            <CardContent>
                <p className='Homeg-cardp'>Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a urna at egestas egestas. Arcu quis est sit aliquam egestas purus pharetra risus consectetur. Enim in leo scelerisque feugiat nisl nisi aenean. Enim egestas nunc tristique integer interdum.</p>

            </CardContent>

            </div>


        </Grid>
        <Grid item md={4}>
        <div className='Card-G1' >
            <CardContent>
                <p className='Homeg-cardp'>Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a urna at egestas egestas. Arcu quis est sit aliquam egestas purus pharetra risus consectetur. Enim in leo scelerisque feugiat nisl nisi aenean. Enim egestas nunc tristique integer interdum.</p>

            </CardContent>
            </div>
          
        </Grid>
        <Grid item md={4}>
        
            <div className='Card-G2' >
            <CardContent>
                <p className='Homeg-cardp'>Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a urna at egestas egestas. Arcu quis est sit aliquam egestas purus pharetra risus consectetur. Enim in leo scelerisque feugiat nisl nisi aenean. Enim egestas nunc tristique integer interdum.</p>

            </CardContent>

            </div>
          
        </Grid>

      </Grid>

       
        


    </div>
  )
}

export default Home_G