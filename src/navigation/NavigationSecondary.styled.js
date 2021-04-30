import styled from "styled-components";

const ParentDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const NavigationBar = styled.div`
  width: 100vw;
  height: 100px;
  background-color: rgba(20, 20, 20, 0.9);
  padding: 5px 0px;
  color: lightgray;
  position: sticky;
  top: 0;
  display: flex;
  overflow-x: scroll;
  z-index: 9999;
  @media (min-width: 1000px) {
    display: none;
  }
`;
const NavigationBarInterior = styled(ParentDiv)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  width:auto;
`;
const NavigationLogoContainer = styled(ParentDiv)``;

const NavigationItemContainer = styled.div`
  display: flex;
  align-items: center;
`;
const NavigationItem = styled.div`
  width: 200px;
  height: 100%;
  /* border-radius: 20px; */
  /* margin: 0 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  cursor: pointer;
`;
const NavigationItemText = styled.h1`
  /* font-size: clamp(10px, 15px, 18px); */
  font-size: clamp(25px, 30px, 35px);
  text-transform: capitalize;
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
const LogoJapanese = styled.h1`
  font-size: clamp(25px, 30px, 35px);
  letter-spacing: 1px;
  margin: 0;
`;
const LogoEnglish = styled(LogoJapanese)`
`;

export {
  NavigationBar,
  NavigationBarInterior,
  NavigationLogoContainer,
  NavigationItemContainer,
  NavigationItem,
  NavigationItemText,
  Logo,
  LogoJapanese,
  LogoEnglish,
};
