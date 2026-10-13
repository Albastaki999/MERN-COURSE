import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="w-full p-2 flex justify-between items-center bg-amber-300 dark:bg-gray-600 sticky top-0 left-0">
      <div className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
      <div
        onClick={() => {
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }}
      >
        {theme}
      </div>
    </div>
  );
};

export default Navbar;
