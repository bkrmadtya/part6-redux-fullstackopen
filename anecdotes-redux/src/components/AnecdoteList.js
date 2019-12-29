import React from 'react';

import { upvote } from '../reducers/anecdoteReducer';

const AnecdoteList = ({ store }) => {
  const anecdotes = store
    .getState()
    .sort((item1, item2) => item2.votes - item1.votes);

  const vote = id => {
    store.dispatch(upvote(id));
  };

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
