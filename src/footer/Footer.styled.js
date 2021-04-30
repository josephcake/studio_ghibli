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
  @media (max-width:1000px){
    /* display:none; */
  }
`;
const FooterMain = styled.div`
  width: 100%;
  background-color: rgb(230, 230, 230);
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 1000px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;

const FooterSecondary = styled(FooterMain)`
  padding-top: 50px;
  width: 50%;
  @media (max-width: 1000px) {
    width: 90%;
    display: flex;
    flex-direction: row;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width:1000px){
    width:80%;
    justify-content:center;
    /* align-items:center; */
  }
`;
const FooterHeader = styled.h1`
  font-size: clamp(18px, 22px, 26px);
  letter-spacing: 1px;
  color: gray;
  font-weight: 400;
  @media (max-width: 1000px) {
    font-size: clamp(30px, 35px, 40px);
  }
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
  margin: 5px 0;
  @media (max-width: 1000px) {
    font-size: clamp(20px, 25px, 30px);
  }
`;

const FooterBanner = styled.img`
  @media (max-width: 1000px) {
    /* width:100%; */
    /* height:100%; */
  }
`;
const TermsAndCreditWrapper = styled(FooterItemWrapper)`
  cursor: pointer;
  font-size: clamp(10px, 12px, 14px);
  margin: 0;
  @media (max-width: 1000px) {
    width: 100%;    
    text-align:center;
    font-size: clamp(14px, 18px, 25px);
  }
`;
const TermsAndCreditItem = styled(FooterItem)`  
`;


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