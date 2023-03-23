import React from 'react'
import './Home_G.css'
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Landingimg from '../../Assets/Landing-img/landimg.png'

const Home_G = () => {
  return (
    <div>
        <div className='HomeG-div'>
          <div>
            <p className='LA-para1'>Lorem ipsum dolor sit amet consectetur. Nisl ut<br/> lectus volutpat a urnac at egestas egestas.<br/> Arcu quis est sit aliquam egestas purus pharetra risus <br/>consectetur. Enim in leo scelerisque feugiat nisl nis aenean.<br/> Enim egestas inunc tristique integer interdum.</p>
            <button className='Home_Gpara'>Publish Your First script</button>
            </div>
            <div>
              <img className='LAnd-img' src={Landingimg} alt="l-img" />
            </div>

        </div>

        <h3 className='HomeG-h3'>Benifits</h3>

        <div className='HomeG-card'>
            <div className='Card-G'  >
            <CardContent>
                <p className='Homeg-cardp'>Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a urna at egestas egestas. Arcu quis est sit aliquam egestas purus pharetra risus consectetur. Enim in leo scelerisque feugiat nisl nisi aenean. Enim egestas nunc tristique integer interdum.</p>

            </CardContent>

            </div>
            <div className='Card-G' >
            <CardContent>
                <p className='Homeg-cardp'>Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a urna at egestas egestas. Arcu quis est sit aliquam egestas purus pharetra risus consectetur. Enim in leo scelerisque feugiat nisl nisi aenean. Enim egestas nunc tristique integer interdum.</p>

            </CardContent>

            </div>
            <div className='Card-G' >
            <CardContent>
                <p className='Homeg-cardp'>Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a urna at egestas egestas. Arcu quis est sit aliquam egestas purus pharetra risus consectetur. Enim in leo scelerisque feugiat nisl nisi aenean. Enim egestas nunc tristique integer interdum.</p>

            </CardContent>

            </div>
        </div>
        


    </div>
  )
}

export default Home_G