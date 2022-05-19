import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import FormSection from './FormSection';

export default {
  title: 'Layout/FormSection',
  component: FormSection,
} as ComponentMeta<typeof FormSection>;

export const Template:
  ComponentStory<typeof FormSection> = function Template():React.ReactElement {
    return <FormSection />;
  };
