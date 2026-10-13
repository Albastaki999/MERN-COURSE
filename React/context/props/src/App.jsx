import React, { useState } from "react";
import Component1 from "./components/Component1";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Component1 count={count} />
      <div
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </div>
    </div>
  );
};

export default App;
