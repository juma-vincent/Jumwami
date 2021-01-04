import React from 'react';
import './testimonials.scss';

const Testimonials = ({imageUrl, name, title, body})=>{
    return (
        <div className='testimonials-box'>            
            <div className='testimonial-container'>
                <div className='testimonial-image-container'> 
                <img src={imageUrl} alt="Testimonial" className='testimonial-image' style={{height:'200px'}}/>
                <span className='testimonial-name'>{name}</span>                 
                </div>
                
                
                <div className='testimonial-text'>
                    <h3 className="testimonial-text-heading">
                        {title}
                    </h3>
                    <p>
                       {body}
                    </p>
                </div>
              
            </div>
        </div>
    );
}

export default Testimonials
