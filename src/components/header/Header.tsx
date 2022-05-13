import React from 'react';
import { HeaderWrapper } from '.';
import { Button, Logo } from '../common/stylesMixing';
import NavList from './in/navList';

const Header = ():JSX.Element => {

  return (
    <HeaderWrapper>
      <div className="logo-wrapper">
        <Logo>LOGO</Logo>
      </div>
      <NavList />
      <div className="cv-button-wrapper">
        <Button>CURRÍCULUM</Button>
      </div>
    </HeaderWrapper>
  )
}

export default Header;
