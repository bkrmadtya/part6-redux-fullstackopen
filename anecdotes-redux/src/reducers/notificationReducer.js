const initialNotification = {
  message: '',
  visibility: false
};

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'TOGGLE_NOTIFICATION':
      return { ...action.payload };
    default:
      return state;
  }
};

export const displayNotification = message => {
  return {
    type: 'TOGGLE_NOTIFICATION',
    payload: { message, visibility: true }
  };
};

export const hideNotification = () => {
  return {
    type: 'TOGGLE_NOTIFICATION',
    payload: {
      message: '',
      visibility: false
    }
  };
};

export default notificationReducer;
