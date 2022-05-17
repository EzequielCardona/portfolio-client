import React from 'react';
import { ProjectDescription } from './projectDescription';
import { ProjectsSectionWrapper } from './styles';

interface projectsSectionProps {
  title: string,
  description: string,
  image: string,
  isReversed: boolean,
}

function ProjectsSection({
  title,
  description,
  image,
  isReversed,
}:projectsSectionProps):React.ReactElement {
  return (
    <ProjectsSectionWrapper isReversed={isReversed || false}>
      <ProjectDescription
        title={title}
        description={description}
      />
      <div className="image-wrapper">
        <img src={image} alt={`Proyecto Jaume: ${title}`} />
      </div>
    </ProjectsSectionWrapper>
  );
}

export default ProjectsSection;
