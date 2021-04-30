import React from 'react';
import styled from 'styled-components';

const GalleryIndividualContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  background-color: rgba(30, 30, 30, 1);
  height:100%;
  @media (max-width: 1000px) {
    /* flex-direction: column; */
    display:block;
    overflow-y: scroll;
  }
`;
const PosterImg = styled.div`
  /* width:30%; */
  height: 100%;
  position: relative;
  @media (max-width: 1000px) {
    width:100%;
  }
`;
const Img = styled.img`
  width: 55vw;
  height: 80vh;
  object-position: center;
  object-fit: cover;
  margin: 0 10px;
  @media (max-width: 1000px) {
    /* height: 90vh; */
    width: 100%;
    margin: 5px 0px;
  }
`;

const GalleryIndividual = ({gallery}) =>{
  console.log(gallery);
  const g = gallery.default.map((p)=>
        <PosterImg key={p}>
          <Img src={p}/>
        </PosterImg>
  )
return <GalleryIndividualContainer>{g}</GalleryIndividualContainer>;
}


export default GalleryIndividual