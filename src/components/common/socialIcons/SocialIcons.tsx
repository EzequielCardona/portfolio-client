import React from 'react';
import { SocialIconsWrapper } from '.';
import { ReactComponent as PhoneIcon } from '../../../assets/icon-phone.svg';
import { ReactComponent as EmailIcon } from '../../../assets/icon-important_mail.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icon-instagram.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/icon-twitter_squared.svg';

function SocialIcons():React.ReactElement {
  return (
    <SocialIconsWrapper>
      <PhoneIcon />
      <EmailIcon />
      <InstagramIcon />
      <TwitterIcon />
    </SocialIconsWrapper>
  );
}

export default SocialIcons;
