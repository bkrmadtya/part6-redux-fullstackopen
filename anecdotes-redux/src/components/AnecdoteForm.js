import React from 'react';

import { createAnecdote } from '../reducers/anecdoteReducer';
import {
  displayNotification,
  hideNotification
} from '../reducers/notificationReducer';

const AnecdoteForm = ({ store }) => {
  const createNew = event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';

    store.dispatch(createAnecdote(content));

    store.dispatch(
      displayNotification(`You created a new ancedote '${content}'`)
    );
    setTimeout(() => {
      store.dispatch(hideNotification());
    }, 5000);
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

export default AnecdoteForm;
