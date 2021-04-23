import React from "react";
import {
  LandingContainer,
  LandingFooter,
  LandingFooterText,
  LandingNewsContainer,
  FeatureFilmWrapper,
  FeatureFilm,
  NewsContainer,
  News,
  NewsTitle,
  NewsSubtitle
} from './Landing.styled.js'
import {newsInfo} from './constant'




const Landing = () =>{
  const news = newsInfo.map((n)=>
    <News key={n.title}>
      <NewsTitle href={n.href} target={"_blank"}>{n.title}</NewsTitle>
      <NewsSubtitle>{n.subtitle}</NewsSubtitle>
    </News>
  )
  return (
    <LandingContainer>
      <LandingNewsContainer >
        <NewsContainer>{news}</NewsContainer>
        <FeatureFilmWrapper >

        <FeatureFilm href={"https://www.aya-and-the-witch.jp/"} target={"_blank"} />
        </FeatureFilmWrapper>
      </LandingNewsContainer>
      <LandingFooter>
        <LandingFooterText>studio ghibli</LandingFooterText>
      </LandingFooter>
    </LandingContainer>
  );
}

export default Landing