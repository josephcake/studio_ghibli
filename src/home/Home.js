import React from 'react';
import styled from 'styled-components';
import Landing from '../landing/Landing'

const HomeContainer = styled.div`  
`
const Info = styled.div`
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
      <Info>
        <NavSpacer />
        <h1>Latest Infomation</h1>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
      </Info>
      <Info>
        <NavSpacer />
        <h1>Event Information</h1>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
        <h4>lorem ipsum</h4>
      </Info>
    </HomeContainer>
  );
}

export default Home