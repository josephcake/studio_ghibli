import React from "react";
import {LatestInfo, EventInfo} from './constant'
import {
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
} from './Info.styled'

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