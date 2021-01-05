
import React from 'react'
import{ css, jsx } from '@emotion/react';
import './slide.scss';

const Slide = ({ imageUrl }) => (
    

  <div >      
      <img src={imageUrl} className='slide-image' alt="slide"/>
  </div>
)

export default Slide