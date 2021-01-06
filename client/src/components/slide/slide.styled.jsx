import styled from 'styled-components'

export const SlideImageContainer= styled.div`
      height: 75vh; 
      width: 100vw;         
      background-size: cover;
      object-fit: cover;
      background-repeat: no-repeat;
      background-position: center;
      overflow: hidden;

      background-image: linear-gradient(
            rgba(21, 28, 58, 0.38),
            rgba(21, 28, 58, 0.68)
          ),
          url(${props=> props.imageUrl});
      
`;
