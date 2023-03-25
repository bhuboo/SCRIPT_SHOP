import React from 'react'
import Grid from '@mui/material/Grid';
import './Publish.css'
import publish from '../../../Assets/publish/Asset 2@4x 1.png'
import Footer from '../../../Components/Footer/Footer';

const Publish = () => {
  return (
    <div className='publish-div'>
        <Grid container>
            <Grid item md={4}>
               <div>
                <h3 className='Publish-heading'>Publish Your Script</h3>
                <label htmlFor="" >Name</label>
                <input type="text" placeholder='Movie Name' />
                
                </div>


            </Grid>
            <Grid item md={4}>
                <p className='second-para'> <span className='ipsum-span'>Lorem ipsum dolor </span> sit amet consectetur. Sagittis mauris felis et eget. Ultrices tortor non nulla sagittis pretium etiam ultricies.<br /> Lorem ipsum dolor sit amet consectetur. Sagittis mauris felis et eget. Ultrices tortor non nulla sagittis pretium etiam ultricies.</p>

            </Grid>
            <Grid item md={4}>
               <img className='publish-img' src={publish} alt="publish" />

            </Grid>

        </Grid>

        <Footer />


    </div>
  )
}

export default Publish