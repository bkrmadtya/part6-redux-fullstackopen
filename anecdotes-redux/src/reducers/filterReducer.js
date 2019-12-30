const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export const filterAnecdote = input => {
  return {
    type: 'SET_FILTER',
    filter: input
  };
};

export default filterReducer;
