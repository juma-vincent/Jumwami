import React, { useState } from 'react';
import Arrow from '../arrow/arrow';
import './slider-refined.scss'

const imageUrls = [`/images/img1.jpg`,`/images/img2.jpg`,
`/images/img3.jpg`,`/images/img4.jpg`,`/images/img5.jpg`];

const NewSlider = () => {
    const [x, setX] = useState(0);

    const goLeft= ()=>{
        x === 0? setX(-100*(imageUrls.length -1)) : setX(x+100);
        // setX(x+100)
        console.log(x)
    }

    const goRight= ()=>{
        (x === -100*(imageUrls.length -1))? setX(0) : setX(x-100);
        console.log(x)
    }

    return (
        <div className='slider'>
            {imageUrls.map((imageUrl, index)=> 
                
                    <div key={imageUrl} className='slide' style={{transform:`translateX(${x}%)`}}>
                        <img src={imageUrl} alt="slide" className='image'/>
                    </div>
                )
            }
            <Arrow direction='left' handleClick={goLeft}/>
            <Arrow direction='right' handleClick={goRight}/>
            {/* <button id='goLeft' onClick={goLeft}>left</button>
            <button id='goRight' onClick={goRight}>right</button> */}
        </div>
      );
}
 
export default NewSlider;