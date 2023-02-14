import { useState } from 'react';
const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
};

const Display = ({ title, anecdote, anecdotePoints }) => {
  return (
    <div>
      <h1>{title}</h1>
      {anecdote}
      <div>has {anecdotePoints} votes</div>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const nextAnecdote = () => {
    setSelected(randomNumber());
  };

  const voteAnecdote = () => {
    const copy = [...points];
    copy[selected]++;
    setPoints(copy);
  };

  const randomNumber = () => Math.floor(Math.random() * anecdotes.length);

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const indexofMax = points.indexOf(Math.max(...points));

  return (
    <div>
      <Display
        title={'Anecdote of the day'}
        anecdote={anecdotes[selected]}
        anecdotePoints={points[selected]}
      />
      <Button onClick={voteAnecdote} text="vote" />
      <Button onClick={nextAnecdote} text="next anecdote" />
      <Display
        title={'Anecdote with most votes'}
        anecdote={anecdotes[indexofMax]}
        anecdotePoints={points[indexofMax]}
      />
    </div>
  );
};

export default App;
