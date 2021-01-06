import React from 'react'
import { DotContainer, DotsContainer } from './dots.styled'


const Dot = ({ active }) => (
  <DotContainer
    // className={`${active ? 'active': ''}`}
    active={active}
  />
)

const Dots = ({ urls, activeIndex }) => (
  <DotsContainer
    
  >
    {urls.map((url, i) => (
      <Dot key={url} active={activeIndex === i} />
    ))}
  </DotsContainer>
)

export default Dots