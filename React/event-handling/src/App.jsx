import { useState } from "react";
import "./App.css";

function App() {
  const handleClick = (name) => {
    alert("Button Clicked " + name);
  };

  const arr = ["ABC", "BCD", "EFG", "HIJ", "KLM", "NOP", "QRS"];

  const [insideBox, setInsideBox] = useState(false);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-black">
        {/* <div
          className="border border-red-400 p-2 rounded-2xl cursor-pointer"
          onClick={() => {
            handleClick("Rashid");
          }}
        >
          Button
          <div
            onClick={(e) => {
              alert("Sub Button Clicked");
              e.stopPropagation();
            }}
            className="border p-2 rounded-2xl"
          >
            Sub Button
            <div
              className="border p-2 rounded-2xl border-green-400"
              onClick={(e) => {
                alert("Sub Sub button clicked");
                e.stopPropagation();
              }}
            >
              Sub Sub button
            </div>
          </div>
        </div> */}
        {/* <div
          className="border border-red-400 p-2 rounded-2xl cursor-pointer"
          onClick={() => {
            handleClick("Anas");
          }}
        >
          Click me
        </div> */}
        <div className="flex flex-col gap-1 bg-gray-800 w-[200px] text-gray-50 border-l border-l-gray-500">
          {arr.map((elem) => (
            <div className="opacity-75 hover:opacity-100 hover:border-l-gray-50 cursor-pointer transition-all duration-300 border border-gray-800 p-2">{elem}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
