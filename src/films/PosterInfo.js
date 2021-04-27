import React from 'react';
import styled from 'styled-components';
import allPosters from '../assets/individual'


const PosterInfoContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  height:100%;
  overflow-y:hidden;
`;

const Overview = styled.div`
  display:flex;
  width:100%;
`
const PosterImg = styled.div`
  /* width:30%; */
  height: 100%;
  border-radius: 20px 0 0 20px;
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;
const Img = styled.img`
  max-width: 45vw;
  min-width: 45vw;
  min-height: 80vh;
  max-height: 80vh;
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
    rgba(255, 255, 255, 0) 0%,    
    rgba(255, 255, 255, 1) 100%
  );
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
      </Overview>
    </PosterInfoContainer>
  ) : null;
}

export default PosterInfo