import { useState } from 'react';

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistics = (props) => {
  if (props.allCtr === 0) return <div>No feedback given</div>;
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="good" counter={props.goodCtr} />
          <StatisticLine text="neutral" counter={props.neutralCtr} />
          <StatisticLine text="bad" counter={props.badCtr} />
          <StatisticLine text="all" counter={props.allCtr} />
          <StatisticLine
            text="average"
            counter={(props.goodCtr - props.badCtr) / props.allCtr}
          />
          <StatisticLine
            text="average"
            counter={(props.goodCtr * 100) / props.allCtr + '%'}
          />
        </tbody>
      </table>
    </>
  );
};

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.counter}</td>
      </tr>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const increaseBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };
  const increaseNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseBad} text="bad" />
      <Button onClick={increaseNeutral} text="neutral" />
      <h1>statistics</h1>
      <Statistics
        goodCtr={good}
        badCtr={bad}
        neutralCtr={neutral}
        allCtr={all}
      />
    </div>
  );
};

export default App;
