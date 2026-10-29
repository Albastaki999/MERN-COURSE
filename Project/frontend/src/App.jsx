import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const { user } = useAuth();
  return (
    <div className="bg-[#EDE7E5] w-screen h-screen">
      <Navbar />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/diary" element={<Diary />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
