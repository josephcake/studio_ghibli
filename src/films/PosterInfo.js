import React, {useState, createRef} from 'react';
import styled from 'styled-components';
import Modal from '../modal/Modal'
import allPosters from '../assets/individual'
import play from '../assets/icons/play.svg'
import chat from '../assets/icons/chat.svg'
import share from '../assets/icons/share.svg'
import heart from '../assets/icons/heart.svg'


const PosterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background-color: black;
  border-radius: 20px;
`;

const Overview = styled.div`
  display: flex;
  width: 100%;
  background-color: black;
  position: relative;
`;
const PosterImg = styled.div`
  /* width:30%; */
  height: 100%;
  border-radius: 20px 0 0 20px;
  position: relative;  
`;
const Img = styled.img`
  width: 55vw;
  height: 80vh;
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
    /* rgba(255, 255, 255, 0) 0%,    
    rgba(255, 255, 255, 1) 100% */
    rgba(0, 0, 0, 0) 0%,    
    rgba(0, 0, 0, 1) 100%
  );
`;

const PosterDetail = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  /* align-items:center; */
  padding:0 30px;
  color:white;
  position: relative;
`
const Title = styled.h1`
  /* font-size: clamp(45px, 50px, 55px); */
  font-size: clamp(25px, 30px, 35px);

  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 0;
  letter-spacing: 2px;
`;

const DetailsWrapper = styled.div`
  display:flex;
  align-items:center;  
`

const Detail = styled.h3`
  /* font-size: clamp(25px, 30px, 35px); */
  font-size: clamp(18px, 20px, 25px);
  margin: 0 20px;  
  font-weight:400;
`;
const DetailInfoRated = styled.h3`
  font-weight: 500;
  color: white;
  border: solid white 4px;
  padding: 2px;
  margin-right:20px;
`;
const Summary = styled.h3`
  font-size: clamp(18px, 20px, 25px);
  /* margin: 0 20px; */
  font-weight: 200;
  word-spacing:2px;
  text-align:justify;
`;

const WatchTrailerWrapper = styled.div`
  position: absolute;
  left: 30px;
  /* margin-left:20px; */
  bottom: 20px;
  &:hover {
    /* filter: invert(50%); */
  }
`;
const WatchTrailer = styled.h1`
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 35px;
  font-weight: 500;
  color: white;
  border: solid white 4px;
  padding: 10px 30px 10px 0px;
  margin-right: 20px;
  &:hover {
    background: rgb(60, 60, 60);
  }
`;

const SVGImg = styled.img`
  display:block;
  padding: 0 30px;
`
const YoutubeVid = styled.div`
  /* height: calc(100vh - 360px); */
  height: 100%;
  max-width: 100%;
  display: block;
`;

const SocialIconContainer = styled.div`
  position: absolute;
  display: flex;
  top: 5px;
  left: 5px;
  cursor: pointer;
  & img {
    margin: 0;
    padding: 10px;
    &:hover {
      filter: invert(50%);
    }
  }
`;

const PosterInfo = ({film}) =>{
  const vidRef = createRef();
  const iframeRef = createRef();
  const [modal, setModal] = useState(null)
  const id = film.id
  console.log(allPosters);
  // const gallery = allPosters[id-1].default.map((p)=>
  //       <PosterImg key={p}>
  //         <Img src={p}/>
  //       </PosterImg>
  // )
  const handleModal = (e) =>{
    setModal(e)
  }
  const Poster = film ? (
    <PosterInfoContainer>
      <Overview>
        <PosterImg>
          <Img src={allPosters[id - 1].default[0]} />
          <ImgOverlay className={"overlay"} />
        </PosterImg>
        <PosterDetail>
          <Title>{film.title}</Title>
          <DetailsWrapper>
            <DetailInfoRated>{film.rated}</DetailInfoRated>
            <Detail>({film.year})</Detail>
            <Detail>{film.screenTime}</Detail>
            <Detail>{film.director}</Detail>
          </DetailsWrapper>
          <Summary>{film.summary}</Summary>
          <WatchTrailerWrapper onClick={() => setModal(true)}>
            <WatchTrailer>
              <SVGImg
                fill={"#ffffff"}
                height={"35px"}
                width={"35px"}
                src={play}
              />
              Watch Trailer
            </WatchTrailer>
          </WatchTrailerWrapper>
        </PosterDetail>
        <SocialIconContainer>
          <SVGImg fill={"#ffffff"} height={"35px"} width={"35px"} src={heart} />
          <SVGImg fill={"#ffffff"} height={"35px"} width={"35px"} src={chat} />
          <SVGImg fill={"#ffffff"} height={"35px"} width={"35px"} src={share} />
        </SocialIconContainer>
      </Overview>
    </PosterInfoContainer>
  ) : null;

  return modal ? (
    <Modal
      child={
        <YoutubeVid ref={vidRef}>
          <iframe
            ref={iframeRef}
            width={"100%"}
            height={"100%"}
            src={`https://www.youtube-nocookie.com/embed/${film.url}?autoplay=0&mute=0&showinfo=0&controls=1&loop=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </YoutubeVid>
      }
      handleModal={handleModal}
    ></Modal>
  ) : (
    Poster
  );
    
}

export default PosterInfo