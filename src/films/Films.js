import React, { createRef, useEffect, useState } from "react";
import styled from "styled-components";
import Modal from '../modal/Modal'
import { filmInfo } from "./constant";
import Poster from './Posters'
import PosterInfo from './PosterInfo'


const MediaContainer = styled.div`  
`

const FilmsContainer = styled.div`
  height:320px;
  width:100vw;
  background-color:black;
  display:flex;
  position: relative;

`
const PosterContainer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  overflow-x: scroll;  
  margin: 0 50px;
`;

const LArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: absolute;
  width:30px;
  left: 0;
  z-index:9;
`;
const RArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: absolute;
  width: 30px;
  right: 0;
  z-index: 9;
`;

const Arrow = styled.h1`
  margin:0 10px;
  color:white;
`


// Youtube
const YoutubeVid = styled.div`
  height: calc(100vh - 360px);
  width: 100vw;
  display: block;
`;


const Films = () => {
  
  const vidRef = createRef();
  const iframeRef = createRef();
  const [vidDimension, setVidDimension] = useState({ h: 0, w: 0 });
  const [trailer, setTrailer] = useState(null);
  const [summary, setSummary] = useState(null)
  



  useEffect(() => {
    const h = vidRef.current.offsetHeight.toString();
    const w = vidRef.current.offsetWidth.toString();
    setVidDimension((prevState) => ({
      ...prevState,
      h,
      w,
    }));    
  }, []);

  const handleModal_Summary = (e) =>{
    setSummary(e)
  }

  const p = filmInfo.map((f) => 
    <Poster 
      key={f.url} 
      setTrailer={setTrailer} 
      handleModal={handleModal_Summary} 
      img={f.poster} 
      film={f} 
    />
  );

  return (
    <MediaContainer>
      <YoutubeVid ref={vidRef}>
        {/* <Overlay /> */}
        <iframe
          ref={iframeRef}
          width={vidDimension.w}
          height={vidDimension.h}
          // src={`https://www.youtube-nocookie.com/embed/${filmInfo[randomlySelectedVid].url}?autoplay=1&mute=1&showinfo=0&controls=1`}
          src={`https://www.youtube-nocookie.com/embed/${
            trailer ? trailer : "uBnRTMGRMkM"
          }?autoplay=0&mute=0&showinfo=0&controls=1&loop=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </YoutubeVid>

      <FilmsContainer>
        <LArrowContainer>
          <Arrow>{"<"}</Arrow>
        </LArrowContainer>
        <RArrowContainer>
          <Arrow>{">"}</Arrow>
        </RArrowContainer>
        <PosterContainer>{p}</PosterContainer>
      </FilmsContainer>
      {summary ? (
        <Modal
          handleModal={handleModal_Summary}
          child={<PosterInfo film={summary} />}
        ></Modal>
      ) : null}

      {/* {trailer?(

      ) : null     

      } */}
    </MediaContainer>
  );
}

export default Films
