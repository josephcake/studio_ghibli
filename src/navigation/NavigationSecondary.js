import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationBar,
  NavigationBarInterior,
  NavigationItemContainer,
  NavigationItem,
  NavigationItemText,
  Logo,
  LogoEnglish,
} from "./NavigationSecondary.styled.js";

const NavigationSecondary = () => {
  return (
    <NavigationBar>
      <NavigationBarInterior>
        <NavigationItemContainer>
          <NavigationItem>
            <NavigationItemText>
              <Link to="/">
                <Logo>
                  {/* <LogoJapanese>スタジオジブリ作品</LogoJapanese> */}
                  <LogoEnglish>SG</LogoEnglish>
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
            <NavigationItemText>Latest Info</NavigationItemText>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemText>Event Info</NavigationItemText>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemText>Museum</NavigationItemText>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemText>Theme Park</NavigationItemText>
          </NavigationItem>
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
};
export default NavigationSecondary;
