import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import HeroSection from './HeroSection';

export default {
  title: 'Layout/HeroSection',
  component: HeroSection,
} as ComponentMeta<typeof HeroSection>;

export const Template: ComponentStory<typeof HeroSection> = function Template():React.ReactElement {
  return <HeroSection />;
};
