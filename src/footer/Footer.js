import React from 'react';
import {CategoryMenu, TravelExhibition, RelatedSites, FooterBanners} from './constant'
import {
  FooterContainer,
  FooterSection,
  FooterHeader,
  FooterItem,
  FooterItemWrapper,
  FooterBanner,
  FooterBannerItem
} from "./Footer.styled";

const Footer = () =>{
  const catergoryMenu = CategoryMenu.map((data) => (
    <FooterItemWrapper key={data.url}>
      <FooterItem href={data.url} target={"_blank"}>
        {data.title}
      </FooterItem>
    </FooterItemWrapper>
  ));
  const travelExhibition = TravelExhibition.map((data) => (
    <FooterItemWrapper key={data.url}>
      <FooterItem href={data.url} target={"_blank"}>
        {data.title}
      </FooterItem>
    </FooterItemWrapper>
  ));

  const relatedSites = RelatedSites.map((data) => (
    <FooterItemWrapper key={data.url}>
      <FooterItem href={data.url} target={"_blank"}>
        {data.title}
      </FooterItem>
    </FooterItemWrapper>
  ));

  const banner = FooterBanners.map((data) => (
      <FooterBannerItem href={data.url} target={"_blank"} key={data.url}>
        <FooterBanner src={data.src} />
      </FooterBannerItem>
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