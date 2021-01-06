
import React, { useState, useRef, useEffect } from 'react'
import SliderContent from '../slider-content/slider-content';
import Arrow from '../arrow/arrow';
import Dots from '../dots/dots';
import { SliderContainer } from './slider.styled';


const getWidth = () => window.innerWidth


const Slider = ({urls, autoPlay}) => {
  

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
    
    
  })

  const { translate, transition, activeIndex } = state
  const autoPlayRef = useRef();

  useEffect(()=>{
    autoPlayRef.current= nextSlide
  })

  useEffect(()=>{
    const play = ()=>{
      autoPlayRef.current()
    }
    if(autoPlay){
      const interval = setInterval(play, autoPlay* 1000);
      return ()=> clearInterval(interval)
    }
    
  },[])

  const nextSlide = ()=>{
    if (activeIndex === urls.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })

  }

  const previousSlide = ()=>{
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (urls.length - 1) * getWidth(),
        activeIndex: urls.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
    }

  return (
    <SliderContainer>
          <SliderContent
            translate={translate}
            transition={transition}
            width={getWidth()* urls.length}
            urls={urls}
            />

            
            <Arrow direction='left' handleClick={previousSlide}/>
            <Arrow direction='right' handleClick={nextSlide}/>
                
            
            
              
          
          <Dots activeIndex={activeIndex} urls={urls}/>

      
      
      
    </SliderContainer>
  )
}


export default Slider