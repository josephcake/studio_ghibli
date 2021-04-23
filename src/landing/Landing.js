import React, { createRef, useEffect, useState } from "react";
import styled from "styled-components";
import {newsInfo} from './constant'
import bg from './assets/landing_wallpaper.png'
import earwig from '../assets/posters/poster_earwig_witch.jpg'

const LandingContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: lightgray;
`;

const LandingFooter = styled.div`
  /* position:absolute; */
  /* bottom:0; */
  height:50px;
  width:100%;
  background-color:black;
  display:flex;
  justify-content:start;
  align-items:center;
`
const LandingFooterText = styled.h1`
  color:white;
  font-weight:200;
  letter-spacing:2px;
  text-transform:uppercase;
  margin-left:20px;
`
const LandingNewsContainer = styled.div`
  /* border: solid lightgray 1px; */
  padding: 10px;
  height: 40%;
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-shrink: 2; */
`;

const FeatureFilmWrapper = styled.a`
  background-color:black;
  height:300px;
  width:200px;
  background-image:url(${earwig});
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
`

const NewsContainer = styled.div`
  min-width: 70%;
  height: 100%;
  display: flex;
  flex-shrink:1;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
`;
const News = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items:center;
`;
const NewsTitle = styled.a`
  font-weight: 400;
  font-size: clamp(10px, 14px, 16px);
  letter-spacing: 1px;
  color: white;
  background-color: black;
  /* flex-grow:0; */
  /* width: auto; */
  width: 25%;
  padding: 10px;
  border-radius: 7px;
  text-indent: 5px;
  margin: 0;
  text-decoration: none;
  &:visited {
    color: white;
  }
  &:hover {
    background-color:rgba(0,0,0,0.7)
  }
`;
const NewsSubtitle = styled.h1`
  font-weight: 200;
  font-size: clamp(10px, 14px, 16px);
  letter-spacing: 1px;
  /* flex-shrink:1; */
  width: 75%;
  padding: 10px;
  margin: 0;
`;

const Landing = () =>{
  const news = newsInfo.map((n)=>
    <News key={n.title}>
      <NewsTitle href={n.href} target={"_blank"}>{n.title}</NewsTitle>
      <NewsSubtitle>{n.subtitle}</NewsSubtitle>
    </News>
  )
  return (
    <LandingContainer>
      <LandingNewsContainer>
        <NewsContainer>{news}</NewsContainer>
        <FeatureFilmWrapper href={"https://www.aya-and-the-witch.jp/"} target={"_blank"} />
      </LandingNewsContainer>
      <LandingFooter>
        <LandingFooterText>studio ghibli</LandingFooterText>
      </LandingFooter>
    </LandingContainer>
  );
}

export default Landing