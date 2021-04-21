import React, { createRef, useEffect, useState } from "react";
import styled from "styled-components";

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
  border: solid lightgray 1px;
  height:50%;
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const NewsContainer = styled.div`
  width:50%;
  height:100%;
`
const News = styled.div`
  width: 100%;
`;
const NewsTitle = styled.h1`
  font-size:16px;
`
const NewsSubtitle = styled.h1`
  font-size: 16px;
`;

const Landing = () =>{
  return (
    <LandingContainer>
      <LandingNewsContainer>
        <NewsContainer>
          <News>
            <NewsTitle>Movie "Earwig and the Witch"</NewsTitle>
            <NewsSubtitle>
              April 29 (Thursday / holiday) National Road Show
            </NewsSubtitle>
          </News>
        </NewsContainer>
      </LandingNewsContainer>
      <LandingFooter>
        <LandingFooterText>studio ghibli</LandingFooterText>
      </LandingFooter>
    </LandingContainer>
  );
}

export default Landing