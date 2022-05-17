import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import NavItem from './NavItem';

export default {
  title: 'Layout/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

export const Template: ComponentStory<typeof NavItem> = function Template(args):React.ReactElement {
  const { word, index } = args;
  return <NavItem word={word} index={index} />;
};

export const Primary = Template.bind({});
Primary.args = {
  word: 'hola',
  index: 0,
};
