import styled from "styled-components";

const ParentDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const NavigationBar = styled.div`
  /* width: 100vw; */
  height: 70px;
  /* background-color: rgba(60, 90, 160, 1); */
  background-color: #838383;
  padding: 5px 20px;
  color:lightgray;
`;
const NavigationBarInterior = styled(ParentDiv)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const NavigationLogoContainer = styled(ParentDiv)`
`;
const NavigationItemContainer = styled(ParentDiv)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const NavigationItem = styled.div`
  width: 100px;
  height: 100%;
  /* border-bottom: solid 1px paleturquoise; */
  /* border-radius: 20px; */
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;
`;
const NavigationItemText = styled.p`
  font-size: clamp(10px, 15px, 18px);
  text-transform:capitalize;
  letter-spacing:2px;
`;
const Logo = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  /* border: solid 1px yellow; */
  width: max-content;
  height: 100%;
`;
const LogoJapanese = styled.p`
  letter-spacing: 1px;
  margin: 0;
  font-size: clamp(5px, 12px, 15px);
`;
const LogoEnglish = styled.p`
  letter-spacing: 2px;
  margin: 0;
  font-size: clamp(5px, 12px, 15px);
`;

export {NavigationBar,
  NavigationBarInterior,
  NavigationLogoContainer,
  NavigationItemContainer,
  NavigationItem,
  NavigationItemText,
  Logo,
  LogoJapanese,
  LogoEnglish
}