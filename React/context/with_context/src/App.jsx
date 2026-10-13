import React, { useEffect, useState } from "react";
import Component1 from "./components/Component1";
import { CountContext } from "./context/CountContext";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { ThemeContext } from "./context/ThemeContext";
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Component1 />
      <div onClick={() => {setCount(count + 1)}}>CLick me</div>
    </CountContext.Provider>
  );
};

// const App = () => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", theme === "dark")
//   }, [theme])

//   return (
//     <div className="w-full">
//       <ThemeContext.Provider value={{ theme, setTheme }}>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </ThemeContext.Provider>
//     </div>
//   );
// };

export default App;
