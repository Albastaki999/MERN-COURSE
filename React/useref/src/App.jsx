import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import "./App.css";

// Case 1: creating variables using useRef()
// function App() {
//   // 1. Update triggers re-render
//   // 2. Value persists across re-render
//   const [count, setcount] = useState(0);

//   // Update doesn't trigger re-render
//   // Value doesn't persist across re-render
//   let count2 = 10;

//   // Update doesn't trigger re-render
//   // Value persists across re-render
//   const count3 = useRef(10);

//   useEffect(() => {
//     console.log("Count is", count);
//     console.log("Count2 is", count2);
//     console.log("Count3 is", count3.current);
//   });

//   return (
//     <>
//       <div className="w-full h-screen border flex justify-center items-center flex-col gap-10 text-[52px]">
//         <div
//           onClick={() => {
//             setcount(count + 1);
//           }}
//           className="border border-red-500 p-2 rounded-[10px] cursor-pointer"
//         >
//           Count is {count}
//         </div>

//         <div
//           onClick={() => {
//             count2 = count2 + 1;
//             console.log("Count2 new value is", count2);
//           }}
//           className="border border-red-500 p-2 rounded-[10px] cursor-pointer"
//         >
//           Count2 is {count2}
//         </div>

//         <div
//           onClick={() => {
//             count3.current = count3.current + 1;
//             console.log("Count3 new value:", count3.current);
//           }}
//           className="border border-red-500 p-2 rounded-[10px] cursor-pointer"
//         >
//           Count3 is {count3.current}
//         </div>
//       </div>
//     </>
//   );
// }

// Case 2: Targetting elements
function App() {
  const box = useRef(null);
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
        <div ref={box} className="w-[90%] h-[400px] border border-black"></div>

        <div
          onClick={() => {
            box.current.style = "display: none";
          }}
          className="border rounded-[10px] p-4 cursor-pointer"
        >
          Click Me!
        </div>
      </div>
    </>
  );
}

export default App;
