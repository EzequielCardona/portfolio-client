import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Footer from './Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Template: ComponentStory<typeof Footer> = function Template(args):React.ReactElement {
  const { copyright } = args;
  return <Footer copyright={copyright} />;
};

export const Primary = Template.bind({});
Primary.args = {
  copyright: 'Copyright 2021 - Todos los derechos reservados.',
};
