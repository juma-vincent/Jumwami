import React, {useState} from 'react';
import Arrow from '../arrow/arrow';
import SliderContent from '../slider-content/slider-content';
import { ImageSliderContainer, ImageWrapper } from './refined-image-slider.styles';



const imageUrls = [`/images/img1.jpg`,`/images/img2.jpg`,
`/images/img3.jpg`,`/images/img4.jpg`,`/images/img5.jpg`];


const ImageSlider = () =>{
    const [current, setCurrent] = useState(0);
    const length = imageUrls.length;

    const prevSlide = ()=>{
         setCurrent(current === 0 ? length-1 : current - 1)
    }

    const nextSlide = ()=>{
        setCurrent(current===length-1 ? 0 : current + 1)
    }
    
     console.log(current)  
    

    return(
        <ImageSliderContainer>
         <Arrow direction='left' handleClick={prevSlide}/>
         <Arrow direction='right' handleClick={nextSlide} />
         
            { 
            imageUrls.map((slideUrl, index)=>
            <div>
                <ImageWrapper className={`${index === current} ?'active': inactive`}key={slideUrl}  >
                    {index === current && (<img src={slideUrl} alt="slide image" className='image'/>)}
                    
                </ImageWrapper>
            </div>
            
            
         )            
            }
         
        </ImageSliderContainer>
    );

};

export default ImageSlider;