import React from 'react';
import styled from 'styled-components';
import allPosters from '../assets/individual'


const PosterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background-color: black;
  border-radius: 20px;
`;

const Overview = styled.div`
  display: flex;
  width: 100%;
  background-color: black;
`;
const PosterImg = styled.div`
  /* width:30%; */
  height: 100%;
  border-radius: 20px 0 0 20px;
  position: relative;  
`;
const Img = styled.img`
  width: 55vw;
  height: 80vh;
  object-position: center;
  object-fit: cover;
  border-radius: 20px 0 0 20px;
`;
const ImgOverlay = styled.div`
  position: absolute;
  top:0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    /* rgba(255, 255, 255, 0) 0%,    
    rgba(255, 255, 255, 1) 100% */
    rgba(0, 0, 0, 0) 0%,    
    rgba(0, 0, 0, 1) 100%
  );
`;

const PosterDetail = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  /* align-items:center; */
  padding:0 30px;
  color:white;
`
const Title = styled.h1`
  /* font-size: clamp(45px, 50px, 55px); */
  font-size: clamp(25px, 30px, 35px);

  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 0;
  letter-spacing: 2px;
`;

const DetailsWrapper = styled.div`
  display:flex;
  align-items:center;  
`

const Detail = styled.h3`
  /* font-size: clamp(25px, 30px, 35px); */
  font-size: clamp(18px, 20px, 25px);
  margin: 0 20px;  
  font-weight:200;
`;
const DetailInfoRated = styled.h3`
  font-weight: 500;
  color: white;
  border: solid white 4px;
  padding: 2px;
  margin-right:20px;
`;

const PosterInfo = ({film}) =>{
  const id = film.id
  console.log(allPosters);
  const gallery = allPosters[id-1].default.map((p)=>
        <PosterImg key={p}>
          <Img src={p}/>
        </PosterImg>
  )

  return film ? (
    <PosterInfoContainer>
      <Overview>
        <PosterImg>
          {/* <Img src={film.poster} /> */}
          <Img src={allPosters[id-1].default[0]} />
          <ImgOverlay className={"overlay"}/>
        </PosterImg>
        <PosterDetail>
          <Title>{film.title}</Title>
          <DetailsWrapper>
            <DetailInfoRated>{film.rated}</DetailInfoRated>
            <Detail>({film.year})</Detail>
            <Detail>{film.screenTime}</Detail>
            <Detail>{film.director}</Detail>
          </DetailsWrapper>
        </PosterDetail>
      </Overview>
    </PosterInfoContainer>
  ) : null;
}

export default PosterInfo