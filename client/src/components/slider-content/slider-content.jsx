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

// styled.div`
//   transform: translateX(-${props => props.translate}px);
//   transition: transform ease-out ${props => props.transition}s;
//   height: 100%;
//   width: ${props => props.width}px;
//   display: flex;
// `


export default SliderContent;