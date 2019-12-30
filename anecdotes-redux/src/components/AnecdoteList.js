import React from 'react';

import { upvote } from '../reducers/anecdoteReducer';
import {
  displayNotification,
  hideNotification
} from '../reducers/notificationReducer';

const AnecdoteList = ({ store }) => {
  const { anecdotes, filter } = store.getState();

  const annecdotesToShow = () => {
    return anecdotes
      .filter(anecdote => anecdote.content.includes(filter))
      .sort((item1, item2) => item2.votes - item1.votes);
  };

  const vote = anecdote => {
    const { id, content } = anecdote;
    store.dispatch(upvote(id));

    store.dispatch(displayNotification(`You voted '${content}'`));
    setTimeout(() => {
      store.dispatch(hideNotification());
    }, 5000);
  };

  return (
    <div>
      {annecdotesToShow().map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
