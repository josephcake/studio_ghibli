import styled from "styled-components";

const InfoContainer = styled.div`
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  flex-direction: column;
`;
const InfoSection = styled.div`
  width: 60%;
  height: auto;
  margin-top: 50px;
  margin-bottom: 20px;
`;
const InfoHeader = styled.h1`
  /* font-size:30px; */
  font-weight: 400;
  text-transform: capitalize;
`;
const InfoDetails = styled.div`
  display: flex;
`;
const InfoDate = styled.h1`
  font-size: clamp(15px, 20px, 25px);
  font-weight: 400;
  min-width: 100px;
`;
const InfoTitle = styled.h1`
  font-size: clamp(15px, 20px, 25px);
  font-weight: 200;
  margin-left: 25px;
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