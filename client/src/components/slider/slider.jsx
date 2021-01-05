
import React, { useState } from 'react'
import SliderContent from '../slider-content/slider-content';
import Slide from '../slide/slide';
import{ css, jsx } from '@emotion/react';
import Arrow from '../arrow/arrow';



const styles ={overflow:'hidden',
position: 'relative',
  height: '70vh',
  width: '100vw',
  margin: '0 auto'}

/**
 * @function Slider
 */
const Slider = ({urls}) => {
  const getWidth = () => window.innerWidth

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  })

  const { translate, transition } = state

  return (
    <div  style={styles}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth()* urls.length}
      >
        {urls.map(url=> 
          <Slide key={url} imageUrl={url}/>
          
        )}
      </SliderContent>      
      <Arrow style={{zIndex: '3'}}/>
      
      
    </div>
  )
}


export default Slider