import React from 'react';
import './option.scss';

const Option = ({text, signout}) => {
    return (         
             <span className= 'option' style={signout?
             {color:'rgb(241, 243, 106)', boxShadow: '0 3px 4px rgba(247, 238, 116, 0.419)'}
             : null}
             >
              {text}
              </span>
        
     );
}
 
export default Option;