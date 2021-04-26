import React from "react";
import styled from "styled-components";

const PosterContainer = styled.div`
  margin: 0 10px;
  position: relative;
  &:hover img {
    transition: width 1s 0.2s ease;
    width: 400px;    
  }
  &:hover .poster_detail_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 1s 0.2s ease;
  }
`;

const PosterImg = styled.img`
  border-radius: 8px;
  height: 300px;
  width: 200px;
  object-fit: cover;
  object-position: center;
  transition: width 1s 0.2s ease;
`;

const PosterDetailContainer = styled.div`
  
  border-radius: 8px;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 400px;
  padding: 0 10px;
`;
const DetailTitle = styled.h1`
  font-size:clamp(20px,22px,25px);
  font-weight:600;
  color:white;
`
const DetailInfo = styled.div`
  display:flex;
  flex-direction:row;
  /* justify-content:space-evenly; */
  align-items:center;
`
const DetailInfoText = styled.h3`
  font-weight: 500;
  color: white;
  margin: 0 10px;
`;
const DetailInfoRated = styled.h3`
  font-weight: 500;
  color: white;
  border: solid white 4px;
  padding: 2px;
`;

const DetailInfoButton = styled.div`
  cursor: pointer;
  background-color: rgb(70, 70, 70);
  padding: 10px;
  border-radius: 50px;
  color: white;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 700;
  &:nth-child(2) {
    margin: 0 10px;
  }
  /* &:last-child {
    margin-left: 0 10px;
  } */
`;


const Poster = ({img, film, setCurrentFilm, setCurrentVid }) =>{  
  const handleSummary = (f)=>{
    setCurrentFilm(f)
  }  
  const handleTrailer = (f) =>{    
    setCurrentVid(f.url)
  }

  return (
    <PosterContainer>
      <PosterImg src={img}></PosterImg>
      <PosterDetailContainer className={"poster_detail_container"}>
        <DetailTitle>{film.title}</DetailTitle>
        <DetailInfo>
          <DetailInfoRated>{film.rated}</DetailInfoRated>
          <DetailInfoText>{film.screenTime}</DetailInfoText>
          <DetailInfoText>{film.year}</DetailInfoText>
          <DetailInfoText>HBO MAX</DetailInfoText>
        </DetailInfo>
        <DetailInfo>
          <DetailInfoButton onClick={() => handleSummary(film)}>
            summary
          </DetailInfoButton>
          <DetailInfoButton onClick={() => handleTrailer(film)}>
            trailer
          </DetailInfoButton>
          <DetailInfoButton>watch options</DetailInfoButton>
        </DetailInfo>
      </PosterDetailContainer>
    </PosterContainer>
  );
}

export default Poster