import React,{useState} from 'react';
import styled from 'styled-components';
import * as allPosters from '../assets/individual'
import {filmInfo} from '../films/constant'
import Modal from '../modal/Modal'
import GalleryIndividual from './GalleryIndividual'

const GalleryContainer = styled.div`
  width:100vw;
  display:flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
  align-items:stretch;  
`

const GalleryImg = styled.div`
  position: relative;
  margin: 10px;
  width:auto;
  &:hover .detail_container {
    display: flex;
    flex-direction:column;
    /* justify-content:space-between;     */
  }
`;

const Img = styled.img`
  border-radius: 8px;
  min-height: 100%;
  width: calc(100vw / 9);
  object-fit: cover;
  object-position: center;
  @media (max-width: 1000px) {
    width: 30vw;
  }  
`;
const DetailContainer = styled.div`
  border-radius: 8px;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; 
  background-color: rgba(0, 0, 0, 0.8);
  width: calc(100vw / 9);
  @media (max-width: 1000px) {
    width: 30vw;
  }  
`;
const TextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  margin:5px;
  /* align-items:center; */
`
const DetailTitle = styled.h1`
  color:white;
  font-weight:900;
  font-size:clamp(18px, 20px, 22px);
  /* margin:0; */
  padding:0;
`
const DetailText = styled.h1`
  color: white;
  font-style: italic;
  font-size: clamp(15px, 18px, 20px);
  margin: 0;
  padding: 0;
`;
const DetailButton = styled.div`
  position:absolute;
  bottom:30%;
  left:10%;
  right:10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 60px;
  /* width:80%; */
  border: solid 7px white;
  border-radius:2px;
  cursor: pointer;
  &:hover {
    background: rgb(60, 60, 60);
  }
`;




const Gallery = () =>{
  const [gallery, setGallery] = useState(null);
  const handleModal = () =>{
    setGallery(null)
  }
  const handleGallery = (id) =>{
    // console.log(allPosters.default[id - 1].default);
    const g = allPosters.default[id - 1];
    
    setGallery(g)
  }
  const p = filmInfo.map((g) => (
    <GalleryImg key={g.id}>
      <Img src={g.poster} />
      <DetailContainer className={"detail_container"}>
        <TextWrapper>
          <DetailTitle>{g.title}</DetailTitle>
          <DetailText>({g.year})</DetailText>
        </TextWrapper>
        <DetailButton onClick={()=>handleGallery(g.id)}>Gallery</DetailButton>
      </DetailContainer>
    </GalleryImg>
  ));
  return (
    <>
      <GalleryContainer>{p}</GalleryContainer>
      {
        gallery?
        <Modal 
          child={
            <GalleryIndividual gallery={gallery}/>
          } 
          handleModal={handleModal}
        >
        </Modal>:null
      }
    </>
  );
}

export default Gallery