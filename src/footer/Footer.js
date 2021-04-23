import React from 'react';
import styled from 'styled-components'
import {CategoryMenu, TravelExhibition, RelatedSites} from './constant'

const FooterContainer = styled.div`
  width: 100vw;
  /* height: 30vh; */
  background-color:rgb(230,230,230);
  display:flex;
  justify-content:space-evenly;
  padding:100px 0;
`;

const FooterSection = styled.div`  
`
const FooterHeader = styled.h1`
  font-size: clamp(18px, 22px, 26px);
  letter-spacing: 1px;
  color:gray;
  font-weight: 400;
`;

const FooterList = styled.a`
  text-decoration: none;
  &:visited {
    color: gray;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const FooterListWrapper = styled.h1`
  font-size: clamp(12px, 14px, 16px);
  font-weight: 300;
  letter-spacing: 1px;
  color: gray;
`;

const Footer = () =>{
  const catergoryMenu = CategoryMenu.map((data) => (
    <FooterListWrapper>      
      <FooterList href={data.url} target={"_blank"}>
        {data.title}
      </FooterList>
    </FooterListWrapper>
  ));
  const travelExhibition = TravelExhibition.map((data) => (
    <FooterListWrapper>
      <FooterList href={data.url} target={"_blank"}>
        {data.title}
      </FooterList>
    </FooterListWrapper>
  ));

  const relatedSites = RelatedSites.map((data) => (
    <FooterListWrapper>
      <FooterList href={data.url} target={"_blank"}>
        {data.title}
      </FooterList>
    </FooterListWrapper>
  ));
  return (
    <FooterContainer>
      <FooterSection>
        <FooterHeader>Category Menu</FooterHeader>
        {catergoryMenu}
      </FooterSection>
      <FooterSection>
        <FooterHeader>Travel Exhibition</FooterHeader>
        {travelExhibition}
        <FooterHeader>Related Sites</FooterHeader>
        {relatedSites}
      </FooterSection>
    </FooterContainer>
  );
}

export default Footer