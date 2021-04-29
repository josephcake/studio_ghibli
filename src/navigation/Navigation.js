import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  NavigationBar,
  NavigationBarInterior,
  NavigationItemContainer,
  NavigationItem,
  NavigationItemText,
  Logo,
  LogoJapanese,
} from "./Navigation.styled.js";
import line_icon from "../assets/icons/line.png";
import twitter_icon from "../assets/icons/twitter.png";

const SocialImg = styled.img`
  width: 40px;
  height: 40px;
  object-position: center;
  object-fit: cover;
  filter: invert(100%);
  &.line{
    border-radius: 4px;
  }
  &.twitter {
    padding:2px;
    border-radius: 50%;
  }
`;

const SocialItem = styled.a`
  text-decoration: none;
  &:hover .line {
    background-color: rgb(255, 70, 255);
    filter: invert(100%);
  }
  &:hover .twitter {
    background-color: rgb(255, 83, 17);
    filter: invert(100%);
  }
`;

const Navigation = () => {
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
        </NavigationItemContainer>

        <NavigationItemContainer>
          <SocialItem
            href={"https://line.me/ti/p/%40studioghibli"}
            target={"_blank"}
          >
            <NavigationItem>
              <SocialImg className={"line"} src={line_icon} />
            </NavigationItem>
          </SocialItem>
          <SocialItem href={"https://twitter.com/JP_GHIBLI"} target={"_blank"}>
            <NavigationItem>
              <SocialImg className={"twitter"} src={twitter_icon} />
            </NavigationItem>
          </SocialItem>
        </NavigationItemContainer>
      </NavigationBarInterior>
    </NavigationBar>
  );
};
export default Navigation;
