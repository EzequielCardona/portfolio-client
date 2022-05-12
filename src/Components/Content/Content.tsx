import React from "react";
import { ContentWrapper } from ".";
import SocialIcons from "../common/socialIcons";
import jaumePhoto from '../../assets/jaume-photo.png';
import { ReactComponent as IconDown } from '../../assets/icons-down.svg';
import { Button } from "../common/stylesMixing";

const Content = ():JSX.Element => {
  return (
    <ContentWrapper>
      <div className="first-section">
        <div className="description-wrapper">
          <h4>¡Hola a todos!</h4>
          <h3>Soy Jaume</h3>
          <p>Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas.</p>
          <SocialIcons />
          <div className="mobile-cv-button">
            <Button>DESCARGAR CURRÍCULUM</Button>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={jaumePhoto} alt="Front-end Developer" />
        </div>
      </div>
      <div className="second-section">
        <h5>A lo largo de mi carrera como Frontend, 
          he tenido el privilegio de trabajar en proyectos retadores e increíbles
        </h5>
        <p>Aquí hay algunos que me gustaría compartir</p>
        <IconDown />
      </div>
    </ContentWrapper>
  )
}

export default Content;