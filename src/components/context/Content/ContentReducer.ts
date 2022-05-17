const ContentReducer = (state:any, action:any) => {
  switch (action.type) {
    case 'SENT_INFO':
      return {
        ...state,
        sentNotification: true,
      };
    default:
      return state;
  }
};

export default ContentReducer;
