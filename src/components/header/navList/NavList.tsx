import React from 'react';
import { Nav } from '.';
import { NavItem } from '../navItem';

function NavList():React.ReactElement {
  return (
    <Nav>
      <NavItem word="HOLA" index={0} />
      <NavItem word="PROYECTOS" index={1} />
      <NavItem word="HABLEMOS" index={2} />
    </Nav>
  );
}

export default NavList;
