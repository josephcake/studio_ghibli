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
  FooterBannerItem,
  TermsAndCreditWrapper,
  TermsAndCreditItem,
  FooterMain,
  FooterSecondary
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