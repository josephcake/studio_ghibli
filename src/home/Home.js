import React from 'react';
import styled from 'styled-components';
import Landing from '../landing/Landing'

const HomeContainer = styled.div`  
`
const LatestInfo = styled.div`
  width: 100vw;
  height: 100vh;
`;
const EventInfo = styled.div`
  width: 100vw;
  height: 100vh;
`;
const NavSpacer = styled.div`
  height: 80px;
  width: 100%;
`;

const Home = () =>{
  return (
    <HomeContainer>
      <Landing />
      <LatestInfo>
        <NavSpacer />
        <h1>Latest Infomation</h1>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
      </LatestInfo>
      <EventInfo>
        <NavSpacer />
        <h1>Event Information</h1>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
      </EventInfo>
    </HomeContainer>
  );
}

export default Home