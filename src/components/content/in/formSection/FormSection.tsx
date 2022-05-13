import React, { useState } from "react";

const FormSection = ():JSX.Element => {

  const [formValues, setFormValues] = useState({
    nombreCompleto: '',
    email: '',
    mensaje: '',
  });

  const handleChangeOnInput = (e:any) => {
    
    const { name, value } = e.target
    
    setFormValues({
      ...formValues,
      [name]: value
    })

  }

  const onSubmitForm = (e:any):void => {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmitForm}>
      <label>Nombre completo:</label>
      <input type='text' placeholder="Ezequiel" onChange={handleChangeOnInput} name='nombreCompleto' />
      <label>Email:</label>
      <input type='email' placeholder="Ezequiel@gmail.com" onChange={handleChangeOnInput} name='email'/>
      <textarea placeholder="Ezequiel is a developer" onChange={handleChangeOnInput} name='mensaje' />
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormSection;