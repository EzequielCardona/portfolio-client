import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import ProjectDescription from './ProjectDescription';

export default {
  title: 'Layout/ProjectDescription',
  component: ProjectDescription,
} as ComponentMeta<typeof ProjectDescription>;

export const Template:
  ComponentStory<typeof ProjectDescription> = function Template(
    args,
  ):React.ReactElement {
    const { title, description } = args;
    return (
      <ProjectDescription
        title={title}
        description={description}
      />
    );
  };

export const Primary = Template.bind({});
Primary.args = {
  title: 'leonidasesteban.com',
  description: 'Accede a más de 100 proyectos que te ayudarán a mejorar tus habilidades como desarrollador Front-End.',
};
