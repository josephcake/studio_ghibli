import React from "react";
import styled from "styled-components";
import {posters, filmInfo} from './constant'

const PosterContainer = styled.div`

`

const PosterImg = styled.img`
  height:300px;
  width:200px;
  object-fit:cover;
  object-position:center;
  margin:0 3px;
`

const Poster = ({img}) =>{
  return (
  <PosterContainer>
    <PosterImg src={img}/>
  </PosterContainer>
  )
}

export default Poster