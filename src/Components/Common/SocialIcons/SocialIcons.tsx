import React from "react";
import { SocialIconsWrapper } from '.';
import { ReactComponent as PhoneIcon } from '../../../Assets/icon-phone.svg';
import { ReactComponent as EmailIcon } from '../../../Assets/icon-important_mail.svg';
import { ReactComponent as InstagramIcon } from '../../../Assets/icon-instagram.svg';
import { ReactComponent as TwitterIcon } from '../../../Assets/icon-twitter_squared.svg';

const SocialIcons = ():JSX.Element => {
  return (
    <SocialIconsWrapper>
      <PhoneIcon />
      <EmailIcon />
      <InstagramIcon />
      <TwitterIcon />
    </SocialIconsWrapper>
  )
}

export default SocialIcons;