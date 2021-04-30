import React from "react";

const IncrementCounter = ({
  counterCount,
  setCounterCount,
  numOfTime,
  setNumOfTime,
}) => {
  const incrementCount = () => {
    setNumOfTime(numOfTime + 1);
    console.log(numOfTime);
    const newTab = counterCount;
    newTab.push(numOfTime);
    setCounterCount(newTab);
    console.log(newTab);
  };
  return (
    <div className="incrementCounter">
      <button onClick={incrementCount}>Add Counter</button>
    </div>
  );
};

export default IncrementCounter;
