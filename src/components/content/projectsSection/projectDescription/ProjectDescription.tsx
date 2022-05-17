import React from 'react';
import { Button, HighlightedTitle } from '../../../common/stylesMixing';
import { DescriptionWrapper } from './styles';

interface projectDescription {
  title: string,
  description: string,
}

function ProjectDescription({
  title,
  description,
}:projectDescription):React.ReactElement {
  return (
    <DescriptionWrapper>
      <HighlightedTitle>
        <h2>{title}</h2>
      </HighlightedTitle>
      <p>{description}</p>
      <div className="buttons-wrapper">
        <div>
          <Button>VER PROYECTO</Button>
        </div>
        <div>
          <Button isTransparent>VER CÓDIGO</Button>
        </div>
      </div>
    </DescriptionWrapper>
  );
}

export default ProjectDescription;
