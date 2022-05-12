import React, { useState } from 'react';
import { HeaderWrapper } from '.';
import { Button, Logo } from '../common/stylesMixing';

const Header = ():JSX.Element => {

  const [menuSelected, setMenuSelected] = useState('hola'); // This should be a state managed in the App component. Selected option mocked

  // use useEffect for evaluating on scrollDown which menu is selected respectively

  const onNavOptionClick = (event:any):void => {
    const optionSelected = event.target.innerText.toLowerCase();
    setMenuSelected(optionSelected);
  }

  return (
    <HeaderWrapper>
      <div className="logo-wrapper">
        <Logo>LOGO</Logo>
      </div>
      <nav>
        <p className={(menuSelected === 'hola') ? "selected" : ""} onClick={onNavOptionClick}>HOLA</p>
        <p className={(menuSelected === 'proyectos') ? "selected" : ""} onClick={onNavOptionClick}>PROYECTOS</p>
        <p className={(menuSelected === 'hablemos') ? "selected" : ""} onClick={onNavOptionClick}>HABLEMOS</p>
      </nav>
      <div className="cv-button-wrapper">
        <Button>CURRÍCULUM</Button>
      </div>
    </HeaderWrapper>
  )
}

export default Header;