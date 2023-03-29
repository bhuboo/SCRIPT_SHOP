import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import './Publish.css'
import publish from '../../../Assets/publish/Asset 2@4x 1.png'
import Footer from '../../../Components/Footer/Footer';
import { BsUpload } from "react-icons/bs";

const Publish = () => {

  const [ moviename,setmoviename] = useState("");
  const [ synopsis,setsynopsis] = useState("");
  const [ genre,setgenre ] = useState("");
  const [ scripttype,setscripttype] = useState("");


  return (
    <div className='publish-div'>
        <Grid container>
            <Grid item md={4}>
               <div className='publish-form'>
                <h3 className='Publish-heading'>Publish Your Script</h3>
              
                <input className='publish-ipbox' type="text" placeholder='Movie Name'  value={moviename} onChange={(e)=>setmoviename(e.target.value)} />
                
                
                <input className='publish-ipbox' type="text" placeholder='Synopsis'  value={synopsis} onChange={(e)=>setsynopsis(e.target.value)} />
               
                
                <input className='publish-ipbox' type="text" placeholder='Genre' value={genre} onChange={(e)=>setgenre(e.target.value)}  />
               
            
                <input className='publish-ipbox' type="text" placeholder='Script type' value={scripttype} onChange={(e)=>setscripttype(e.target.value)}  />
                <button className='publish-button'>
                <label htmlFor='img'> <BsUpload />  Upload script</label>
                </button>
                <input id='img' type="file" className='file-input' />
                <button className='publish-button'>Publish</button>
               
                
                </div>


            </Grid>
            <Grid item md={4}>
                <p className='second-para'> <span className='ipsum-span'>Lorem ipsum dolor </span> sit amet consectetur. Sagittis mauris felis et eget. Ultrices tortor non nulla sagittis pretium etiam ultricies.<br />Lorem ipsum dolor sit amet consectetur. Sagittis mauris felis et eget. Ultrices tortor non nulla sagittis pretium etiam ultricies.</p>

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