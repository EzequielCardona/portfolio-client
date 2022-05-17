import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import NavList from './NavList';

export default {
  title: 'Layout/NavList',
  component: NavList,
} as ComponentMeta<typeof NavList>;

export const Template: ComponentStory<typeof NavList> = function Template():React.ReactElement {
  return <NavList />;
};
