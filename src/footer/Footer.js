import React from 'react';
import {CategoryMenu, TravelExhibition, RelatedSites, FooterBanners} from './constant'
import {
  FooterContainer,
  FooterSection,
  FooterHeader,
  FooterList,
  FooterListWrapper,
  FooterBanner,
} from './Footer.styled'

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

  const banner = FooterBanners.map((data) => (
    <FooterList href={data.href} target={"_blank"}>
      <FooterBanner src={data.src} />
    </FooterList>
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
      <FooterSection>
        {banner}
      </FooterSection>
    </FooterContainer>
  );
}

export default Footer