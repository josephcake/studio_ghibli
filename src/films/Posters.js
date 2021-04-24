import React from "react";
import styled from "styled-components";
import {posters, filmInfo} from './constant'

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

const Poster = ({img}) =>{
  return (
  <PosterContainer>
    <PosterImg src={img}/>
  </PosterContainer>
  )
}

export default Poster