import React from 'react';
import { HeaderWrapper } from '.';
import { Button, Logo } from '../common/stylesMixing';
import { NavList } from './navList';

function Header():React.ReactElement {
  return (
    <HeaderWrapper>
      <div className="logo-wrapper">
        <Logo>LOGO</Logo>
      </div>
      <NavList />
      <div className="button-wrapper">
        <Button>CURRÍCULUM</Button>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
