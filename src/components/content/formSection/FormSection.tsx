import React, { useState, useContext } from 'react';
import { Button, HighlightedTitle } from '../../common/stylesMixing';
import { FormWrapper } from './styles';
import { FormInput } from './formInput';
import ContentContext from '../../context/Content/ContentContext';

function FormSection():React.ReactElement {
  const contentCtx = useContext(ContentContext);
  const [formValues, setFormValues] = useState({
    nombreCompleto: '',
    email: '',
    mensaje: '',
  });
  const handleChangeOnInput = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const onSubmitForm = (e:any):void => {
    e.preventDefault();
    contentCtx?.sendData(formValues);
  };
  return (
    <FormWrapper>
      <HighlightedTitle isInContactForm>
        <h2>HABLEMOS</h2>
      </HighlightedTitle>
      <p>
        Si está interesado en trabajar conmigo en su próximo proyecto,
        no dude en ponerse en contacto conmigo.
      </p>
      <form onSubmit={onSubmitForm}>
        <FormInput
          label="Nombre completo"
          inputName="nombreCompleto"
          inputType="text"
          inputPlaceholder="Ezequiel Cardona"
          isRequired
          handleChangeOnInput={handleChangeOnInput}
        />
        <FormInput
          label="Email"
          inputName="email"
          inputType="text"
          inputPlaceholder="ezequiel@gmail.com"
          isRequired
          handleChangeOnInput={handleChangeOnInput}
        />
        <FormInput
          label="Mensaje"
          inputName="mensaje"
          inputType="textarea"
          inputPlaceholder="Mensaje..."
          isRequired={false}
          handleChangeOnInput={handleChangeOnInput}
        />
        <div className="button-wrapper">
          <Button type="submit">ENVIAR MENSAJE</Button>
        </div>
      </form>
    </FormWrapper>
  );
}

export default FormSection;
