import React from "react";
import styled from "styled-components";
import {LatestInfo, EventInfo} from './constant'


const InfoContainer = styled.div`
  width: 100vw ;
  /* height: 100vh; */
  display: flex;
  justify-content:center;
  align-items:center;
  margin:10px;
  flex-direction:column;
`
const InfoSection = styled.div`
  width:60%;
  height:auto;
  margin: 20px 0;
`
const InfoHeader = styled.h1`
  /* font-size:30px; */
  font-weight:400;
  text-transform:capitalize;
`
const InfoDetails = styled.div`
  display:flex;
`
const InfoDate = styled.h1`
  font-size:clamp(15px,20px,25px);
  font-weight:400;
  min-width:100px;
`
const InfoTitle = styled.h1`
  font-size:clamp(15px,20px,25px);
  font-weight: 200;
  margin-left:25px;
`;
const InfoBreaker = styled.div`
  height:1px;
  width:100%;
  background-color: lightgray;
`
const InfoTitleWrapper = styled.a`
  text-decoration: none;
  &:visited {
    color: black;
  }
  &:hover {
    text-decoration:underline;
  }
`;

const ReadMoreWrapper = styled.div`  
  width:60%;
  display:flex;
  justify-content:flex-start;

`

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
const Info = () =>{
  const latestInfo = LatestInfo.map((info)=>(
    <InfoDetails key={info.title}>
      <InfoDate>{info.date}</InfoDate>
      <InfoTitle>
        <InfoTitleWrapper href={info.url} target={"_blank"}>
          {info.title}
        </InfoTitleWrapper>
      </InfoTitle>
    </InfoDetails>
  ))
  const eventInfo = EventInfo.map((info) => (
    <InfoDetails key={info.title}>
      <InfoDate>{info.date}</InfoDate>
      <InfoTitle>
        <InfoTitleWrapper href={info.url} target={"_blank"}>
          {info.title}
        </InfoTitleWrapper>
      </InfoTitle>
    </InfoDetails>
  ));
  return (
    <InfoContainer>
      <InfoSection>
        <InfoHeader>latest information</InfoHeader>
        <InfoBreaker />
        {latestInfo}
      </InfoSection>
      <ReadMoreWrapper>
        <ReadMore href={"https://www.ghibli.jp/info/"} target={"_blank"}>
          Read more
        </ReadMore>
      </ReadMoreWrapper>
      <InfoSection>
        <InfoHeader>event information</InfoHeader>
        <InfoBreaker />
        {eventInfo}
      </InfoSection>
      <ReadMoreWrapper>
        <ReadMore href={"https://www.ghibli.jp/event/"} target={"_blank"}>
          Read more
        </ReadMore>
      </ReadMoreWrapper>
    </InfoContainer>
  );
}

export default Info