import React from 'react';
import { FooterWrapper } from './Footer.styles';
import { Logo } from '../Common/StylesMixing';
import { ReactComponent as HeartIcon } from '../../Assets/icon-heart_outline.svg';
import SocialIcons from '../Common/SocialIcons';

const Footer = ():JSX.Element => {

  return (
    <FooterWrapper>
      <div className='Logo-wrapper'>
        <Logo isWhite>LOGO</Logo>
      </div>
      <p>Hecho con {<HeartIcon />} de Jaume. Copyright 2021 - Todos los derechos reservados.</p>
      <SocialIcons />
    </FooterWrapper>
  )
}

export default Footer;