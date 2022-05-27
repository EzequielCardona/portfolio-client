import React, { useMemo, useReducer } from 'react';
import axiosClient from '../../../config/axios';
import ContentContext from './ContentContext';
import ContentReducer from './ContentReducer';

interface contentStateProps {
  children: React.ReactElement[],
}

function ContentState(props: contentStateProps) {
  const {
    children,
  } = props;
  const initialState = {
    sentNotification: false,
    sentMessage: '',
  };
  const [state, dispatch] = useReducer(ContentReducer, initialState);
  const sendData = async (formData: {
    nombreCompleto: string,
    email: string,
    mensaje: string,
  }) => {
    const response = await axiosClient.post('/api/leads/create', formData);
    console.log(response);
    dispatch({
      type: 'SENT_INFO',
      payload: formData.mensaje,
    });
  };
  const contextProviderValue = useMemo(() => ({
    sentNotification: state.sentNotification,
    sentMessage: state.sentMessage,
    sendData,
  }), []);
  return (
    <ContentContext.Provider value={contextProviderValue}>
      {children}
    </ContentContext.Provider>
  );
}

export default ContentState;
