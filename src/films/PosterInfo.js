import React from 'react';
import styled from 'styled-components';


const PosterInfoContainer = styled.div`
  width: 100%;
`;
const Info = styled.h1`
  margin: auto;
  width: 25%;
  font-weight: 400;
  font-size: clamp(20px, 25px, 30px);
`;
const PosterDetails = styled.div`
  /* border:solid lightgray 1px; */
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
`
const Overview = styled.div`
  display:flex;
  width:100%;
`
const PosterImg = styled.div`
  width:30%;
  height:100%;
  `
const Img = styled.img`
  max-width:680px;
`
const TitleYearHeader = styled.div`
  display: flex;  
  width: 100%;
  justify-content:flex-start;
  align-items:baseline;
  border-bottom:solid 1px lightgray;
`;

const HeaderText = styled.h1`
  font-size: clamp(30px, 35px, 40px);
  width:50%;
`;
const TitleText = styled.h1`
  font-size: clamp(40px, 45px, 50px);
  text-indent:30px;
  letter-spacing:1px;
  font-weight:400;
  width:50%;
`;

const PosterInfo = ({film}) =>{
  return film ? (
    <PosterInfoContainer>
      <TitleYearHeader>
        <TitleText>{film.title}</TitleText>
      </TitleYearHeader>
      <Overview>
        <PosterImg>
          <Img src={film.poster} />
        </PosterImg>
        <PosterDetails>
          <Info>Year: {film.year}</Info>
          <Info>Director: {film.director}</Info>
          <Info>Screen Writers: {film.screenWriters}</Info>
          <Info>Producers: {film.producers}</Info>
          <Info>Music: {film.music}</Info>
        </PosterDetails>
      </Overview>
    </PosterInfoContainer>
  ) : null;
}

export default PosterInfo