import styled from "styled-components";

const ParentDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const NavigationBar = styled.div`
  width: 100vw;
  height: 40px;
  /* background-color: rgba(20, 20, 20, 0.9); */
  /* background-color: black; */
  background-color: blue;
  /* background-color: #838383; */
  padding: 5px 0px;
  color: lightgray;
  position: sticky;
  top: 0;
  @media (min-width: 1000px) {
    display: none;
  }
`;
const NavigationBarInterior = styled(ParentDiv)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const NavigationLogoContainer = styled(ParentDiv)``;
const NavigationItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: flex-start; */
  align-items: center;
`;
const NavigationItem = styled.div`
  width: 100px;
  height: 100%;
  /* border-bottom: solid 1px paleturquoise; */
  /* border-radius: 20px; */
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const NavigationItemText = styled.h1`
  font-size: clamp(10px, 15px, 18px);
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
  font-size: clamp(10px, 15px, 18px);
  letter-spacing: 1px;
  margin: 0;
  font-size: clamp(5px, 12px, 15px);
`;
const LogoEnglish = styled.h1`
  font-size: clamp(10px, 15px, 18px);
  letter-spacing: 2px;
  margin: 0;
  font-size: clamp(5px, 12px, 15px);
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
