import styled from "styled-components";

const ParentDiv = styled.div`
  width: 100%;
  height: 100%;
`;
const NavigationBar = styled.div`
  height: 100%;
  width: 100%;
  height: 50px;
  background-color: rgba(60, 90, 160, 1);
  padding: 10px 0;
`;
const NavigationBarInterior = styled(ParentDiv)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;
const NavigationLogoContainer = styled(ParentDiv)`
  width: 100%;
  height: 100%;
`;
const NavigationItemContainer = styled(ParentDiv)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const NavigationLogo = styled.div`
  width: 100px;
  height: 100%;
  border: solid 1px palevioletred;
`;

const NavigationItem = styled.div`
  width: 100px;
  height: 100%;
  border: solid 1px paleturquoise;
`;

export {NavigationBar, NavigationBarInterior, NavigationLogoContainer, NavigationItemContainer, NavigationLogo, NavigationItem}