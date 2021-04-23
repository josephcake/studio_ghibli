import styled from "styled-components";

const InfoContainer = styled.div`
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding-top: 50px;
    padding-bottom: 100px;
  }
`;
const InfoSection = styled.div`
  width: 60%;
  height: auto;
  margin-top: 50px;
  margin-bottom: 20px;
  @media (max-width:1000px){
    width:95%;
  }
`;
const InfoHeader = styled.h1`
  font-weight: 400;
  text-transform: capitalize;
  @media (max-width: 1000px) {
    font-size: clamp(40px, 45px, 50px);
  }
`;
const InfoDetails = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    flex-direction:column;
    border-bottom:solid lightgray 1px;
  }
`;
const InfoDate = styled.h1`
  font-size: clamp(15px, 20px, 25px);
  font-weight: 400;
  min-width: 100px;
  @media (max-width: 1000px) {
    font-size: clamp(30px, 35px, 40px);
  }
`;
const InfoTitle = styled.h1`
  font-size: clamp(15px, 20px, 25px);
  font-weight: 200;
  margin-left: 25px;
  flex-wrap:wrap;
  @media (max-width: 1000px) {
    font-size: clamp(30px, 35px, 40px);
  }
`;
const InfoBreaker = styled.div`
  height: 1px;
  width: 100%;
  background-color: lightgray;
`;
const InfoTitleWrapper = styled.a`
  text-decoration: none;
  &:visited {
    color: black;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const ReadMoreWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 1000px) {
    width:95%;
  }
`;

const ReadMore = styled.a`
  font-size: 25px;
  font-weight: 200;
  border: solid lightgray 1px;
  border-radius: 5px;
  padding: 5px;
  &:visited {
    color: black;
  }
  &:hover {
    background-color: lightgray;
  }
  @media (max-width: 1000px) {
    font-size: 45px;
    padding:10px;
  }
`;

export {
  InfoContainer,
  InfoSection,
  InfoHeader,
  InfoDetails,
  InfoDate,
  InfoTitle,
  InfoBreaker,
  InfoTitleWrapper,
  ReadMoreWrapper,
  ReadMore
}