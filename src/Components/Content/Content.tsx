import React from "react";
import { ContentWrapper } from ".";
import SocialIcons from "../Common/SocialIcons";
import jaumePhoto from '../../Assets/jaume-photo.png';

const Content = ():JSX.Element => {
  return (
    <ContentWrapper>
      <div className="first-section">
        <div className="description-wrapper">
          <h4>¡Hola a todos!</h4>
          <h3>Soy Jaume</h3>
          <p>Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas.</p>
          <SocialIcons />
        </div>
        <div className="image-wrapper">
          <img src={jaumePhoto} alt="Front-end Developer" />
        </div>
      </div>
    </ContentWrapper>
  )
}

export default Content;