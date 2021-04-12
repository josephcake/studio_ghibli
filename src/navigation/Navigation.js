import React from 'react';
import {
  NavigationBar, 
  NavigationBarInterior, 
  NavigationLogoContainer, 
  NavigationItemContainer, 
  NavigationLogo, 
  NavigationItem
} from './Navigation.styled.js'

const Navigation = () =>{
  return (
    <NavigationBar>
      <NavigationBarInterior>
        <NavigationLogoContainer>
          <NavigationLogo></NavigationLogo>
        </NavigationLogoContainer>
        <NavigationItemContainer>
          <NavigationItem></NavigationItem>
          <NavigationItem></NavigationItem>
          <NavigationItem></NavigationItem>
          <NavigationItem></NavigationItem>
          <NavigationItem></NavigationItem>
        </NavigationItemContainer>
      </NavigationBarInterior>
    </NavigationBar>
  )
}
export default Navigation
