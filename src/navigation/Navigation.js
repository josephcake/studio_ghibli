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
import {externalSites} from './constant'
import line_icon from "../assets/icons/line.png";
import twitter_icon from "../assets/icons/twitter.png";

const SocialImg = styled.img`
  width: 40px;
  height: 40px;
  object-position: center;
  object-fit: cover;
  filter: invert(100%);
  &.line {
    border-radius: 4px;
  }
  &.twitter {
    padding: 2px;
    border-radius: 50%;
  }
  &:hover {
    filter: invert(75%);
  }
`;

const LinkItem = styled.a`
  text-decoration: none;  
`;

const Navigation = () => {
  const externalLinks = externalSites.map((a) => (
    <NavigationItem key={a.name}>
      <NavigationItemText>
        <LinkItem href={a.url} target={"_blank"}>
          {a.name}
        </LinkItem>
      </NavigationItemText>
    </NavigationItem>
  ));
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
            <NavigationItemText>
              <Link to="gallery">gallery</Link>
            </NavigationItemText>
          </NavigationItem>

          {externalLinks}          
        </NavigationItemContainer>

        <NavigationItemContainer>
          <LinkItem
            href={"https://line.me/ti/p/%40studioghibli"}
            target={"_blank"}
          >
            <NavigationItem>
              <SocialImg className={"line"} src={line_icon} />
            </NavigationItem>
          </LinkItem>
          <LinkItem href={"https://twitter.com/JP_GHIBLI"} target={"_blank"}>
            <NavigationItem>
              <SocialImg className={"twitter"} src={twitter_icon} />
            </NavigationItem>
          </LinkItem>
        </NavigationItemContainer>
      </NavigationBarInterior>
    </NavigationBar>
  );
};
export default Navigation;
