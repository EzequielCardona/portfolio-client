import React, { useState } from "react";
import { Nav } from '.';

const NavList = () => {

  const [menuSelected, setMenuSelected] = useState(0);

  const NavItem = (props:{word:string, index:number}):JSX.Element  => {
    return (
      <p 
        className={(menuSelected === props.index) ? "selected" : ""} 
        onClick={():void => setMenuSelected(props.index)}>
          {props.word}
      </p>
    )
  }

  return (
    <Nav>
      <NavItem word="HOLA" index={0} />
      <NavItem word="PROYECTOS" index={1} />
      <NavItem word="HABLEMOS" index={2} />
    </Nav>
  )
}

export default NavList;