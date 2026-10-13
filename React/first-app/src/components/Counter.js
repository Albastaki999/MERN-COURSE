import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  // count is a state variable
  // setCount is a function that is used to update count value
  // whenever count changes, this component is re-rendered
  // useState is a built-in hook provided by react
  // Hooks allow us to use react's features in our components
  const [count, setCount] 
  = useState(1);

  console.log("Counter");

  return (
    <div>
      <div
        onClick={() => {
          setCount(count * 2);
        }}
        className="count"
      >
        Count is {count}
      </div>
    </div>
  );
};

export default Counter;
