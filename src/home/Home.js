import React from 'react';
import styled from 'styled-components';
import Landing from '../landing/Landing'
import Info from '../info/Info'

const HomeContainer = styled.div`  
`

// const NavSpacer = styled.div`
//   height: 80px;
//   width: 100%;
// `;

const Home = () =>{
  return (
    <HomeContainer>
      <Landing />
      <Info/>        
    </HomeContainer>
  );
}

export default Home