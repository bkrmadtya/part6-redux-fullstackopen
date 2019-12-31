import anecdoteService from '../services/anecdotes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data;

    case 'NEW_ANECDOTE':
      return [...state, action.data];

    case 'UPVOTE':
      const votedAnecdote = action.data;

      return state.map(item =>
        item.id === votedAnecdote.id ? votedAnecdote : item
      );
    default:
      return state;
  }
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    });
  };
};

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createAnecdote(content);
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    });
  };
};

export const upvote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateAnecdote(anecdote);
    dispatch({
      type: 'UPVOTE',
      data: updatedAnecdote
    });
  };
};

export default reducer;
