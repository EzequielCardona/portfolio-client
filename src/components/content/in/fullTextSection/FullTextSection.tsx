import React from "react";
import { ReactComponent as IconDown } from '../../../../Assets/icons-down.svg';
import { FullTextSectionWrapper } from "./styles";


const FullTextSection = ():JSX.Element => {
  return (
    <FullTextSectionWrapper>
      <h5>A lo largo de mi carrera como Frontend, 
        he tenido el privilegio de trabajar en proyectos retadores e increíbles
      </h5>
      <p>Aquí hay algunos que me gustaría compartir</p>
      <IconDown />
    </FullTextSectionWrapper>
  )
}

export default FullTextSection;