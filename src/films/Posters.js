import React from "react";
import styled from "styled-components";

const PosterContainer = styled.div`
  cursor: pointer;
  margin:0 5px;
  position: relative;
  &:hover img{
    transition: width 1s 0.3s ease-in-out;
    width:400px;
  }
  &:hover .poster_detail_container{
    display:flex;
    flex-direction:column;
    justify-content:center;
  }
`

const PosterImg = styled.img`
  border-radius: 8px;
  height: 300px;
  width: 200px;
  object-fit: cover;
  object-position: center;
  transition: width 0.2s 0.2s ease-in-out;
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
`;
const DetailTitle = styled.h1`
  font-size:clamp(20px,22px,25px);
  font-weight:300;
  color:white;
`
const DetailInfo = styled.div`
  display:flex;
  flex-direction:row;
  /* justify-content:space-evenly; */
  align-items:center;
`
const DetailInfoText = styled.h3`
  color:white;
  margin: 0 10px;
`
const DetailInfoRated = styled.h3`
  color: white;
  border:solid white 5px;
`;
const Poster = ({img, film, setCurrentFilm, setCurrentVid }) =>{  
  const handleFilm = (f) =>{
    setCurrentVid(f.url)
    setCurrentFilm(f)
  }  

  return (
  <PosterContainer onClick={()=>handleFilm(film)}>
    <PosterImg src={img}>
    </PosterImg>
    <PosterDetailContainer className={"poster_detail_container"}> 
      <DetailTitle>
        {film.title}
      </DetailTitle>
      <DetailInfo>
        <DetailInfoRated>PG</DetailInfoRated>
        <DetailInfoText>2hr</DetailInfoText>
        <DetailInfoText>1999</DetailInfoText>
      </DetailInfo>
    </PosterDetailContainer>
  </PosterContainer>
  )
}

export default Poster