
import React from 'react';
import {  TextAndButtonContainer, ImageWrapper } from './slide.styled';



const Slide = ({ imageUrl, title, subtitle, buttonText, x }) => {
    
  return(
    <ImageWrapper imageUrl={imageUrl} style={{transform:`translateX(${x}%)`}}>
      <TextAndButtonContainer>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttonText? <button>{buttonText}</button>: null }
      </TextAndButtonContainer>

    </ImageWrapper>
  );
  
  }

export default Slide