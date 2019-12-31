import React from 'react';
import { connect } from 'react-redux';

import anecdoteService from '../services/anecdotes';
import { createAnecdote } from '../reducers/anecdoteReducer';
import {
  displayNotification,
  hideNotification
} from '../reducers/notificationReducer';

const AnecdoteForm = props => {
  const { createAnecdote, displayNotification, hideNotification } = props;

  const createNew = async event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';

    const newAnecdote = await anecdoteService.createAnecdote(content);
    createAnecdote(newAnecdote);

    displayNotification(`You created a new ancedote '${newAnecdote.content}'`);
    setTimeout(() => {
      hideNotification();
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

export default connect(null, {
  createAnecdote,
  displayNotification,
  hideNotification
})(AnecdoteForm);
