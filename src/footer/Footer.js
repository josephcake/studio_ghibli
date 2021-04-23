import React from 'react';
import styled from "styled-components";

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

const TermsAndCreditWrapper = styled.h1`
  font-size: clamp(10px, 12px, 14px);
  letter-spacing: 1px;
  color: gray;
  font-weight: 400;
`; 
const TermsAndCreditItem = styled.a`

`
const FooterMain = styled.div`
  width: 100%;
  background-color: rgb(230, 230, 230);
  display: flex;
  justify-content: space-evenly;
`;

const FooterSecondary = styled.div`
  padding-top:50px;
  width: 50%;
  background-color: rgb(230, 230, 230);
  display: flex;
  justify-content: space-evenly;
`;

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
      <FooterMain>
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
        <FooterSection>{banner}</FooterSection>
      </FooterMain>
      <FooterSecondary>
          <TermsAndCreditWrapper>
            <TermsAndCreditItem>
              © 2005-2021 STUDIO GHIBLI Inc
            </TermsAndCreditItem>
          </TermsAndCreditWrapper>
          <TermsAndCreditWrapper>
            <TermsAndCreditItem
              href={"https://www.ghibli.jp/misc/"}
              target={"_blank"}
            >
              Terms of use
            </TermsAndCreditItem>
          </TermsAndCreditWrapper>
          <TermsAndCreditWrapper>
            <TermsAndCreditItem
              href={"https://www.ghibli.jp/mail/"}
              target={"_blank"}
            >
              Opinions etc
            </TermsAndCreditItem>
          </TermsAndCreditWrapper>
          <TermsAndCreditWrapper>
            <TermsAndCreditItem
              href={"https://www.ghibli.jp/mail/"}
              target={"_blank"}
            >
              Credits
            </TermsAndCreditItem>
          </TermsAndCreditWrapper>
      </FooterSecondary>
    </FooterContainer>
  );
}

export default Footer