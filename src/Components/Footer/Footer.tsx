import React from 'react';
import { FooterWrapper } from '.';
import { Logo } from '../Common/StylesMixing';
import { ReactComponent as HeartIcon } from '../../assets/icon-heart_outline.svg';
import SocialIcons from '../Common/SocialIcons';

const Footer = ():JSX.Element => {

  return (
    <FooterWrapper>
      <div className='Logo-wrapper'>
        <Logo isWhite>LOGO</Logo>
      </div>
      <div className="copyright">
        <p>Hecho con {<HeartIcon />} de Jaume.</p>
        <p>Copyright 2021 - Todos los derechos reservados.</p>
      </div>
      <SocialIcons />
    </FooterWrapper>
  )
}

export default Footer;