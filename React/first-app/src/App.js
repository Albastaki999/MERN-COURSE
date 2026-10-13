import Counter from "./components/Counter";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import SpecialButton from "./components/SpecialButton";

const App = () => {
  console.log("App");

  return (
    <div className="container">
      {/* <Header color2="red" />
      <Header color1="blue" color2="brown" /> */}

      {/* <Counter /> */}
      <SpecialButton />
    </div>
  );
};

export default App;
