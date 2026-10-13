import { useMemo, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {users} from "./components/Navbar";

// const users = ["Rashid", "Amar", "Anas", "Arhaan", "Ali", "Kashif", "Muzammil"];

// const App = () => {
//   const [count, setCount] = useState(0);
//   // const [n, setN] = useState(100);
//   const [search, setSearch] = useState("");

//   function filterUsersBasedOnSearch() {
//     console.log("Filtering Users");

//     return users.filter((user) =>
//       user.toLowerCase().includes(search.toLowerCase()),
//     );
//   }
//   // Without memoization/caching
//   // const filteredUsers = filterUsersBasedOnSearch();

//   // With memoization/caching
//   const filteredUsers = useMemo(() => filterUsersBasedOnSearch(), [search])

//   // Caching
//   // const total = expensiveCalculation(n);
//   // const total = useMemo(() => expensiveCalculation(n), [n]);

//   return (
//     <div>
//       <div
//         className="count"
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Hello {count}
//       </div>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => {
//           setSearch(e.target.value);
//         }}
//         placeholder="Search Something"
//       />

//       {/* <div>{total}</div> */}
//       {filteredUsers.map((user, i) => (
//         <div key={i}>{user}</div>
//       ))}
//     </div>
//   );
// };

function expensiveCalculation(n) {
  console.log("Calculating...");

  let total = 0;

  for (let i = 0; i < n; i++) {
    total += i;
  }

  console.log("Calculated");
  return total;
}

const App = () => {
  return (
    <div>
      <Navbar />
      {users}
    </div>
  );
};

export default App;
