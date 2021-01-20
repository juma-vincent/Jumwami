import React, { useState, useRef, useEffect } from 'react';
import Arrow from '../arrow/arrow';
import Dots from '../dots/dots';
import Slide from '../slide/slide';
import './slider.scss';
import { ImageSliderContainer} from './slider.styles';

const bannerData=[{title:'QUALITY WORK GUARANTEED', 
subtitle:'Get an excellent learning experience with us.', 
buttonText:'SEE TESTIMONIALS',
imageUrl:'/images/img1.jpg'},
{title:'TRY OUR SERVICES', 
subtitle:'We offer 3 days free trial.', 
buttonText:'TRY NOW',
imageUrl:'/images/img2.jpg'},
{title:'', 
subtitle:'', 
buttonText:'',
imageUrl:'/images/img3.jpg'},
{title:'', 
subtitle:'', 
buttonText:'',
imageUrl:'/images/img4.jpg'},
{title:'OUR CLIENTS ARE HAPPY', 
subtitle:'', 
buttonText:'',
imageUrl:'/images/img5.jpg'},

]



const Slider = ({autoPlay}) => {
    const [x, setX] = useState(0);

    const autoPlayRef = useRef();

    useEffect(()=>{
        autoPlayRef.current= goRight;
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

    const goLeft= ()=>{
        x === 0? setX(-100*(bannerData.length -1)) : setX(x+100);
        
        
    }

    const goRight= ()=>{
        (x === -100*(bannerData.length -1))? setX(0) : setX(x-100);
        
    }

    return (
        <ImageSliderContainer>
            {bannerData.map(({imageUrl, title, subtitle, buttonText })=> 
                    
                       
                    <Slide key={imageUrl}
                    x={x}
                    imageUrl={imageUrl} 
                    title={title} 
                    subtitle={subtitle} 
                    buttonText={buttonText}/>
                )
            }
            <Arrow direction='left' handleClick={goLeft}/>
            <Arrow direction='right' handleClick={goRight}/>
            <Dots activeIndex={x} arraydata={bannerData}/>
            
        </ImageSliderContainer>
      );
}
 
export default Slider;