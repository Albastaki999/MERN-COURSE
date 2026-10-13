import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

// function App() {
//   // Used for lifecycle management
//   // 1st param -> callback (logic)
//   // 2nd param -> dependency array

//   // Case 1: This runs once on first render
//   useEffect(() => {
//     alert("I am running only on first render");
//   }, []);

//   // Case 2: runs for every render
//   useEffect(() => {
//     alert("I run on every render");
//   });

//   const [count, setcount] = useState(0);
//   const [count2, setcount2] = useState(0);

//   // Case 3: runs once on first render and then runs whenever count is changed
//   useEffect(() => {
//     alert("I am running because count 1 changed");
//   }, [count]);

//   return (
//     <div>
//       <div
//         onClick={() => {
//           setcount(count + 1);
//         }}
//       >
//         Count 1 is {count}
//       </div>

//       <div
//         onClick={() => {
//           setcount2(count2 + 1);
//         }}
//       >
//         Count 2 is {count2}
//       </div>
//       <Child1 />
//       <Child2 />
//     </div>
//   );
// }

function App() {
  const [studentData, setstudentData] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchStudentData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            name: "Anas",
          },
          {
            name: "Amar",
          },
          {
            name: "Arhaan",
          },
          {
            name: "Ali",
          },
        ]);
      }, 7000);
    });
  };

  const getData = async () => {
    console.log("Fetching Student data");
    setloading(true);
    const result = await fetchStudentData();
    setloading(false);
    console.log("Student data fetched!", result);

    setstudentData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>Student data</div>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div>
          {studentData.map((element) => (
            <div>{element.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
