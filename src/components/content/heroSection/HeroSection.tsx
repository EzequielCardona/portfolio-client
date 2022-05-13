import React from 'react';
import SocialIcons from '../../common/socialIcons';
import { Button } from '../../common/stylesMixing';
import { HeroWrapper } from '.';
import jaumePhoto from '../../../assets/jaume-photo.png';

function HeroSection():React.ReactElement {
  return (
    <HeroWrapper>
      <div className="description-wrapper">
        <h4>¡Hola a todos!</h4>
        <h3>Soy Jaume</h3>
        <p>
          Frontend Developer que le encanta implementar diseños que inspiran
          y atraen a las personas.
        </p>
        <SocialIcons />
        <div className="mobile-button">
          <Button>DESCARGAR CURRÍCULUM</Button>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={jaumePhoto} alt="Front-end Developer" />
      </div>
    </HeroWrapper>
  );
}

export default HeroSection;
