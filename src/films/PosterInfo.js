import React from 'react';
import styled from 'styled-components';
import _1 from '../assets/individual'


const PosterInfoContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  height:100%;
  overflow-y:auto;
`;

const Overview = styled.div`
  display:flex;
  width:100%;
`
const PosterImg = styled.div`
  /* width:30%; */
  /* height:100%; */
`
const Img = styled.img`
  max-width:680px;
  max-height:100%;
`

const PosterInfo = ({film}) =>{
  const id = film.id.toString()
  const posters = _1.default.map((p)=>
        <PosterImg key={p}>
          <Img src={p}/>
        </PosterImg>

  )

  return film ? (
    <PosterInfoContainer>      
      <Overview>
        <PosterImg>
          <Img src={film.poster} />
        </PosterImg>
      </Overview>
      {posters}
    </PosterInfoContainer>
  ) : null;
}

export default PosterInfo