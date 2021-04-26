import React from "react";
import styled from "styled-components";

const PosterContainer = styled.div`
  cursor: pointer;
  margin:0 5px;
`

const PosterImg = styled.img`
  height:300px;
  width:200px;
  object-fit:cover;
  object-position:center;
`

const Poster = ({img, film, setCurrentFilm, setCurrentVid }) =>{  
  const handleFilm = (f) =>{
    setCurrentVid(f.url)
    setCurrentFilm(f)
  }

  return (
  <PosterContainer onClick={()=>handleFilm(film)}>
    <PosterImg src={img}/>
  </PosterContainer>
  )
}

export default Poster