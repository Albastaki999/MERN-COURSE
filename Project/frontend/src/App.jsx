import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Diary from "./pages/Diary";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
