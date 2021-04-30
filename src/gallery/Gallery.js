import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  width:100vw;
  height: calc(100vh - 50px);
`

const Gallery = () =>{
  return (
    <GalleryContainer>
      gallery
    </GalleryContainer>
  )
}

export default Gallery