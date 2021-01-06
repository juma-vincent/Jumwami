import React from 'react'
import Slide from '../slide/slide';
import {SliderContentContainer} from './slider-content.styles';



const SliderContent = ({translate, transition, width, urls })=> 
  
  <SliderContentContainer 
  transition={transition} 
  translate={translate} 
  width={width}>
    
    {urls.map(url=> 
          <Slide key={url} imageUrl={url}/>
          
        )}

  </SliderContentContainer>



export default SliderContent;