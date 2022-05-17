import React from 'react';
import { InputWrapper } from '.';

interface formInputProps {
  label: string,
  inputType: string,
  inputPlaceholder: string,
  inputName: string,
  isRequired: boolean,
  handleChangeOnInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

function FormInput({
  label,
  inputType,
  inputPlaceholder,
  inputName,
  isRequired,
  handleChangeOnInput,
}: formInputProps):React.ReactElement {
  if (inputType === 'textarea') {
    return (
      <InputWrapper>
        <label htmlFor={inputName}>
          {label}
          {isRequired && <span>*</span>}
        </label>
        <textarea
          placeholder={inputPlaceholder}
          required={isRequired}
          rows={3}
          name={inputName}
          onChange={handleChangeOnInput}
        />
      </InputWrapper>
    );
  }
  return (
    <InputWrapper>
      <label htmlFor={inputName}>
        {label}
        {isRequired && <span>*</span>}
      </label>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        required={isRequired}
        name={inputName}
        onChange={handleChangeOnInput}
      />
    </InputWrapper>
  );
}

export default FormInput;
