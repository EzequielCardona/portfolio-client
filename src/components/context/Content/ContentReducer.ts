interface actionProps {
  type: string,
  payload: string,
}

const ContentReducer = (state: {
  sentNotification: boolean,
  sentMessage: string,
}, action: actionProps) => {
  switch (action.type) {
    case 'SENT_INFO':
      return {
        ...state,
        sentNotification: true,
        sentMessage: action.payload,
      };
    default:
      return state;
  }
};

export default ContentReducer;
