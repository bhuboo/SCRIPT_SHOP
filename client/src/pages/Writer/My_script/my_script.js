import React from 'react'
import products from './product.json'
import './my_script.css'
import {Card} from '@mui/material'
function my_script() {
  return (
    <div>
      <h2 className='hdscript'>Your Scripts</h2>
      <div className='card'>
      {products?.map((product,key) =>(
           <Card className='matrixcard'>
          <p className='matrixname'>{product.name}</p>
          <button className='scriptbtn'>Edit Script Detais</button>
        </Card>
      )  )}
      </div>
    </div>
  )
}

export default my_script
