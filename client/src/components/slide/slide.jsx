
import React from 'react'
import { SlideImageContainer } from './slide.styled'


const Slide = ({ imageUrl }) => (
    

  <SlideImageContainer imageUrl= {imageUrl} >      
      
      {/* <img src={imageUrl} className='slide-image' alt="slide"/> */}
  </SlideImageContainer>
)

export default Slide