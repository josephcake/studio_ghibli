import React,{createRef, useEffect, useState} from 'react';
import {vidInfo} from './constant'
import styled from "styled-components";



const YoutubeVid = styled.div`
  height:calc(100vh - 80px);
  width:100vw;
  display:block;
`
const Overlay = styled.div`
  position:absolute;
  background-color:rgba(0,0,0,0.3);
  height: calc(100vh - 80px);
  width: 100vw;
  display: block;
  z-index:9999999;
`;

const Landing = () =>{
  const vidRef = createRef()
  const [vidDimension, setVidDimension] = useState({h:0,w:0})
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
      <Overlay/>
      <iframe
        width={vidDimension.w}
        height={vidDimension.h}
        src="https://www.youtube-nocookie.com/embed/0pVkiod6V0U?autoplay=1&mute=1&showinfo=0&controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </YoutubeVid>
  );
}

export default Landing