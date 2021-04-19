import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 100vw;
  height: 30vh;
`;

const Footer = () =>{
  return (
    <FooterContainer>
      <h1>Footer</h1>
      <h4>lorem ipsum</h4>
      <h4>lorem ipsum</h4>     
    </FooterContainer>
  );
}

export default Footer