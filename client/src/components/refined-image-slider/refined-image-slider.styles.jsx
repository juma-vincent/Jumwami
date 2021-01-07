import styled from 'styled-components';

export const ImageSliderContainer = styled.div`
display: flex;      
height: 75vh; 
width: 100vw;  
    

`;

export const ImageWrapper = styled.div` 
    .image{
        height: 75vh; 
        width: 100vw;
        background-size: cover;
        object-fit: cover;
        background-repeat: no-repeat;
        background-position: center;   

    }
    .active{
        opacity: 0;
        transition-duration: 1s ;
    }

    .inactive {
         opacity: 0;
         transition-duration: 1s ease;
    }
    
`;
// background-image: linear-gradient(
//     rgba(21, 28, 58, 0.38),
//     rgba(21, 28, 58, 0.68)
//     ),
//     url(${props=> props.slideUrl});
    