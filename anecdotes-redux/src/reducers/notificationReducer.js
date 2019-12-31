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

export const setNotification = (message, time) => {
  return dispatch => {
    dispatch(displayNotification(message));

    setTimeout(() => {
      dispatch(clearNotification());
    }, time * 1000);
  };
};

const displayNotification = message => {
  return {
    type: 'TOGGLE_NOTIFICATION',
    payload: { message, visibility: true }
  };
};

const clearNotification = () => {
  return {
    type: 'TOGGLE_NOTIFICATION',
    payload: {
      message: '',
      visibility: false
    }
  };
};

export default notificationReducer;
