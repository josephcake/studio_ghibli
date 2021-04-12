import React from 'react';
import styled from 'styled-components';
import {
  NavigationBar,
  NavigationBarInterior,
  NavigationLogoContainer,
  NavigationItemContainer,
  NavigationItem,
  NavigationItemText,
  Logo,
  LogoJapanese,
  LogoEnglish,
} from "./Navigation.styled.js";


const Navigation = () =>{
  return (
    <NavigationBar>
      <NavigationBarInterior>
        <NavigationLogoContainer>
            <Logo>
              <LogoJapanese>スタジオジブリ作品</LogoJapanese>
              <LogoEnglish>STUDIO GHIBLI</LogoEnglish>
            </Logo>
        </NavigationLogoContainer>
        <NavigationItemContainer>
          <NavigationItem><NavigationItemText>films</NavigationItemText></NavigationItem>
          <NavigationItem><NavigationItemText>characters</NavigationItemText></NavigationItem>
          <NavigationItem><NavigationItemText>locations</NavigationItemText></NavigationItem>
          <NavigationItem><NavigationItemText>species</NavigationItemText></NavigationItem>
          <NavigationItem><NavigationItemText>vehicles</NavigationItemText></NavigationItem>
        </NavigationItemContainer>
      </NavigationBarInterior>
    </NavigationBar>
  );
}
export default Navigation
