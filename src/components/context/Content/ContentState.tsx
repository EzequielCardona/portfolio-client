import React, { useMemo, useReducer } from 'react';
import axiosClient from '../../../config/axios';
import ContentContext from './ContentContext';
import ContentReducer from './ContentReducer';

function ContentState(props: any) {
  const {
    children,
  } = props;
  const initialState = {
    sentNotification: false,
    sentMessage: '',
  };
  const [state, dispatch] = useReducer(ContentReducer, initialState);
  const sendData = async (formData: any) => {
    const response = await axiosClient.post('/leads', formData);
    console.log(response);
    dispatch({
      type: 'SENT_INFO',
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
