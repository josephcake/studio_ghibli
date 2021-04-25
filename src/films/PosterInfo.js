import React from 'react';
import styled from 'styled-components';


const PosterInfoContainer = styled.div`
  /* height: 100vh; */
  width: 100vw;
`;
const Info = styled.h1`

`
const PosterInfo = ({film}) =>{
  return (
    film?    
    <PosterInfoContainer>
      <Info>{film.title}</Info>
      <Info>{film.url}</Info>
      <Info>{film.year}</Info>
      <Info>{film.director}</Info>
      <Info>{film.screenWriters}</Info>
      <Info>{film.producers}</Info>
      <Info>{film.music}</Info>
    </PosterInfoContainer>
    :null
  );
}

export default PosterInfo