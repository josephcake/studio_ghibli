import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100vw;
  background-color: rgb(230, 230, 230);
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  padding-top: 100px;
  padding-bottom: 20px;
  align-items:center;
`;
const FooterMain = styled.div`
  width: 100%;
  background-color: rgb(230, 230, 230);
  display: flex;
  justify-content: space-evenly;
`;

const FooterSecondary = styled(FooterMain)`
  padding-top: 50px;
  width: 50%;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterHeader = styled.h1`
  font-size: clamp(18px, 22px, 26px);
  letter-spacing: 1px;
  color: gray;
  font-weight: 400;
`;

const FooterItem = styled.a`
  text-decoration: none;
  &:visited {
    color: gray;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const FooterBannerItem = styled(FooterItem)`
  margin:15px 0;
`;

const FooterItemWrapper = styled.h1`
  font-size: clamp(12px, 14px, 16px);
  font-weight: 300;
  letter-spacing: 1px;
  color: gray;
  margin:5px 0;
`;

const FooterBanner = styled.img`
`;
const TermsAndCreditWrapper = styled(FooterItemWrapper)`
  font-size: clamp(10px, 12px, 14px);
  margin: 0;
`;
const TermsAndCreditItem = styled(FooterItem)``;


export {
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
  FooterSecondary,
};