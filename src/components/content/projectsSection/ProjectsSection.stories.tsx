import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import ProjectsSection from './ProjectsSection';

export default {
  title: 'Layout/ProjectsSection',
  component: ProjectsSection,
} as ComponentMeta<typeof ProjectsSection>;

export const Template:
  ComponentStory<typeof ProjectsSection> = function Template(
    args,
  ):React.ReactElement {
    const {
      title, description, image, isReversed,
    } = args;
    return (
      <ProjectsSection
        title={title}
        description={description}
        image={image}
        isReversed={isReversed}
      />
    );
  };

export const Primary = Template.bind({});
Primary.args = {
  title: 'leonidasesteban.com',
  description: 'Accede a más de 100 proyectos que te ayudarán a mejorar tus habilidades como desarrollador Front-End.',
  image: 'https://someimagen.com',
  isReversed: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'leonidasesteban.com',
  description: 'Accede a más de 100 proyectos que te ayudarán a mejorar tus habilidades como desarrollador Front-End.',
  image: 'https://someimagen.com',
  isReversed: true,
};
