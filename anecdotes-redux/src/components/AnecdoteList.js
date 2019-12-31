import React from 'react';
import { connect } from 'react-redux';

import { upvote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = props => {
  const { visibleAnecdotes, upvote, setNotification } = props;

  const vote = anecdote => {
    upvote(anecdote);
    setNotification(`You voted '${anecdote.content}'`, 5);
  };

  return (
    <div>
      {visibleAnecdotes.map(anecdote => (
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

const annecdotesToShow = ({ anecdotes, filter }) => {
  return anecdotes
    .filter(anecdote => anecdote.content.includes(filter))
    .sort((item1, item2) => item2.votes - item1.votes);
};

const mapStateToProps = state => {
  return {
    visibleAnecdotes: annecdotesToShow(state)
  };
};

export default connect(mapStateToProps, {
  upvote,
  setNotification
})(AnecdoteList);
