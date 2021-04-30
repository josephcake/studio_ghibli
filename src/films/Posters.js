import React, {useState} from "react";
import styled from "styled-components";
import amazon from '../assets/icons/services/amazon.png'
import apple from '../assets/icons/services/apple.png'
import google from '../assets/icons/services/google.png'
import hbo from '../assets/icons/services/hbo.png'
import youtube from '../assets/icons/services/youtube.png'
import vudu from '../assets/icons/services/vudu.png'

const PosterContainer = styled.div`
  margin: 0 10px;
  position: relative;
  &:hover img {
    transition: width 1s 0.2s ease;
    width: 400px;    
  }
  &:hover .poster_detail_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 1s 0.2s ease;
  }
`;

const PosterImg = styled.img`
  border-radius: 8px;
  height: 300px;
  width: 200px;
  object-fit: cover;
  object-position: center;
  transition: width 1s 0.2s ease;
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
  padding: 0 10px;
`;
const DetailTitle = styled.h1`
  font-size:clamp(20px,22px,25px);
  font-weight:600;
  color:white;
`
const DetailInfo = styled.div`
  display:flex;
  flex-direction:row;
  /* justify-content:space-evenly; */
  align-items:center;
`
const DetailInfoText = styled.h3`
  font-weight: 500;
  color: white;
  margin: 0 10px;
`;
const DetailInfoRated = styled.h3`
  font-weight: 500;
  color: white;
  border: solid white 4px;
  padding: 2px;
`;

const DetailInfoButton = styled.div`
  cursor: pointer;
  background-color: rgb(70, 70, 70);
  padding: 10px;
  border-radius: 50px;
  color: white;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 700;
  &:nth-child(2) {
    margin: 0 10px;
  } 
`;

const BannerContainer = styled.div`
  z-index:99999999;
  height:50px;
  width:100vw;
  position:fixed;
  top:0;
  left:0;
  background-color:maroon;
  /* opacity:0.9; */
  display:flex;
  justify-content:space-between;
  align-items:center;
`
const BannerText = styled.h1`
  color:white;
  text-indent:40px;
`
const BannerClose = styled.h1`
  color: white;
  margin-right:40px;
  cursor: pointer;
`;

const Poster = ({img, film, handleModal, setTrailer }) =>{  
  const [banner, setBanner] = useState(null)
  const handleSummary = (f)=>{
    handleModal(f)
  }  
  const handleTrailer = (f) =>{    
    setTrailer(f.url)
  }
 
  const handleBanner = () =>{
    console.log("banner clicked");
    if(!banner){
      setBanner(true)
      setTimeout(()=>{
        setBanner(null)
      },3000)
    }

  }
  

  return (
    <PosterContainer >
      <PosterImg src={img}></PosterImg>
      <PosterDetailContainer className={"poster_detail_container"}>
        <DetailTitle>{film.title}</DetailTitle>
        <DetailInfo>
          <DetailInfoRated>{film.rated}</DetailInfoRated>
          <DetailInfoText>{film.screenTime}</DetailInfoText>
          <DetailInfoText>{film.year}</DetailInfoText>
          <DetailInfoText>HBO MAX</DetailInfoText>
        </DetailInfo>
        <DetailInfo>
          <DetailInfoButton onClick={() => handleSummary(film)}>
            summary
          </DetailInfoButton>
          <DetailInfoButton onClick={() => handleTrailer(film)}>
            trailer
          </DetailInfoButton>
          <DetailInfoButton onClick={() => handleBanner()}>
            watch options
          </DetailInfoButton>
        </DetailInfo>
      </PosterDetailContainer>
      {
        banner?
        <BannerContainer>
          <BannerText>Option not available.</BannerText>
          <BannerClose>X</BannerClose>
        </BannerContainer>
        :null
      }
    </PosterContainer>
  );
}

export default Poster

