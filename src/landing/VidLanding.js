import React,{createRef, useEffect, useState} from 'react';
// import {filmInfo} from './constant'
import styled from "styled-components";


const LandingContainer = styled.div`
  width:100vw;
  /* position:absolute; */
  /* top:80px; */
`

const YoutubeVid = styled.div`
  height:calc(100vh - 80px);
  width:100vw;
  display:block;
`
const Overlay = styled.div`
  position:absolute;
  /* background-color:rgba(0,0,0,0.3); */
  top:80px;
  height: calc(100vh - 160px);
  width: 100vw;
  display: block;
  z-index:9999999;
`;




const Landing = () =>{
  const vidRef = createRef()
  const iframeRef = createRef()
  const [vidDimension, setVidDimension] = useState({h:0,w:0})
  // const randomlySelectedVid = Math.floor(Math.random() * filmInfo.length - 1);

  
  useEffect(() => {
    const h = vidRef.current.offsetHeight.toString()
    const w = vidRef.current.offsetWidth.toString()
    setVidDimension((prevState) => ({
      ...prevState,
      h,w
    }));
  }, [])

  return (
      <YoutubeVid ref={vidRef}>
        <Overlay />
        <iframe
          ref={iframeRef}
          width={vidDimension.w}
          height={vidDimension.h}
          // src={`https://www.youtube-nocookie.com/embed/${filmInfo[randomlySelectedVid].url}?autoplay=1&mute=1&showinfo=0&controls=1`}
          src={`https://www.youtube-nocookie.com/embed/uBnRTMGRMkM?playlist=uBnRTMGRMkM&autoplay=1&mute=1&showinfo=0&controls=1&loop=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </YoutubeVid>
  );
}

export default Landing