import React, { createRef, useEffect, useState } from "react";
import styled from "styled-components";
import {newsInfo} from './constant'

const LandingContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  /* position:absolute; */
  display:flex;
  flex-direction:column;
  justify-content:space-between;
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
  padding:10px;
  height:40%;
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const NewsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
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
  font-size: clamp(10px, 14px, 18px);
  letter-spacing: 1px;
  color: white;
  background-color: black;
  width: 35%;
  padding: 7px;
  border-radius: 7px;
  text-indent: 10px;
  margin: 0;
  text-decoration: none;
  &:visited {
    color: white;
  }
`;
const NewsSubtitle = styled.h1`
  font-weight: 200;
  font-size: clamp(10px, 14px, 18px);
  letter-spacing: 1px;
  width: 65%;
  padding: 7px;
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
        <NewsContainer>
          {news}
        </NewsContainer>
      </LandingNewsContainer>
      <LandingFooter>
        <LandingFooterText>studio ghibli</LandingFooterText>
      </LandingFooter>
    </LandingContainer>
  );
}

export default Landing