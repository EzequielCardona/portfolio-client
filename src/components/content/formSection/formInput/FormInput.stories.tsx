import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import FormInput from './FormInput';

export default {
  title: 'Layout/FormInput',
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

export const Template:
  ComponentStory<typeof FormInput> = function Template(args):React.ReactElement {
    const {
      label,
      inputType,
      inputPlaceholder,
      inputName,
      isRequired,
      handleChangeOnInput,
    } = args;
    return (
      <FormInput
        label={label}
        inputType={inputType}
        inputPlaceholder={inputPlaceholder}
        inputName={inputName}
        isRequired={isRequired}
        handleChangeOnInput={handleChangeOnInput}
      />
    );
  };

export const Primary = Template.bind({});
Primary.args = {
  label: 'Nombre completo',
  inputType: 'text',
  inputPlaceholder: 'Ezequiel',
  inputName: 'nombreCompleto',
  isRequired: true,
  handleChangeOnInput: () => {},
};
