import React from 'react';
import { connect } from 'react-redux';

import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = props => {
  const { createAnecdote, setNotification } = props;

  const createNew = async event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';

    createAnecdote(content);

    setNotification(`You created a new ancedote '${content}'`, 5);
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createNew}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default connect(null, {
  createAnecdote,
  setNotification
})(AnecdoteForm);
