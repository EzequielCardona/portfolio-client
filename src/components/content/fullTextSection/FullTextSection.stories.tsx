import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import FullTextSection from './FullTextSection';

export default {
  title: 'Layout/FullTextSection',
  component: FullTextSection,
} as ComponentMeta<typeof FullTextSection>;

export const Template:
  ComponentStory<typeof FullTextSection> = function Template():React.ReactElement {
    return <FullTextSection />;
  };
