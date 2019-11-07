import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [max, setMax] = useState(0);

  const votesHandleClick = () => {
    let val = votes[index];
    setVotes([...votes.slice(0, index), ++val, ...votes.slice(index + 1)]);
    setMax(votes.indexOf(Math.max(...votes)));
  };

  const anecdoteHandleClick = () => {
    setIndex(Math.floor(Math.random() * anecdotes.length));
    setSelected(index);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {votes[index]} votes</p>
      <div>
        <button onClick={votesHandleClick}>vote</button>
        <button onClick={anecdoteHandleClick}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[max]}
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
