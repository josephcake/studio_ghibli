import React from 'react';
import { Link } from "react-router-dom";
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
        <NavigationItemContainer>
          <NavigationItem>
            <NavigationItemText>
              <Link to="/">
                <Logo>
                  <LogoJapanese>スタジオジブリ作品</LogoJapanese>
                  {/* <LogoEnglish>STUDIO GHIBLI</LogoEnglish> */}
                </Logo>
              </Link>
            </NavigationItemText>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemText>
              <Link to="films">films</Link>
            </NavigationItemText>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemText>characters</NavigationItemText>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemText>locations</NavigationItemText>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemText>species</NavigationItemText>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemText>vehicles</NavigationItemText>
          </NavigationItem>
        </NavigationItemContainer>
        <NavigationItemContainer>
          <NavigationItem>
            <NavigationItemText>Twitter</NavigationItemText>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemText>Line</NavigationItemText>
          </NavigationItem>
        </NavigationItemContainer>
      </NavigationBarInterior>
    </NavigationBar>
  );
}
export default Navigation
