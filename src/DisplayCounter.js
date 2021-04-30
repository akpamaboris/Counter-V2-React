import Counter from "./Counter.js";
import IncrementCounter from "./IncrementCounter";
import { useState } from "react";

const DisplayCounter = () => {
  const [counterCount, setCounterCount] = useState([]);
  const [numOfTime, setNumOfTime] = useState(0);
  return (
    <>
      {numOfTime < 3 ? (
        <IncrementCounter
          counterCount={counterCount}
          setCounterCount={setCounterCount}
          numOfTime={numOfTime}
          setNumOfTime={setNumOfTime}
        />
      ) : null}

      <div className="DisplayCounter">
        {counterCount.map((x, index) => {
          return (
            <div key={index}>
              <Counter />
            </div>
          );
        })}
        {/* {numOfTime} */}
      </div>
    </>
  );
};

export default DisplayCounter;
