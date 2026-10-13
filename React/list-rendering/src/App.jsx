import React, { useEffect, useState } from "react";

// Rendering List
// const App = () => {
//   const todos = [
//     {
//       title: "Attend class",
//       description: "Understand List rendering and useRef",
//     },
//     {
//       title: "Go home and practise",
//       description: "abchshaja",
//     },
//     {
//       title: "Eat dinner",
//       description: "Eat healthy",
//     },
//   ];
//   return (
//     <div className="w-full h-screen flex flex-col justify-center items-center">
//       {/* <div className="border rounded-2xl p-4 flex flex-col gap-3 w-[300px]">
//         <div className="flex flex-col">
//           <span className="font-bold text-[24px]">Title</span> {todos[0].title}
//         </div>
//         <div className="flex flex-col">
//           <span className="font-bold text-[24px]">Description</span>{" "}
//           {todos[0].description}
//         </div>
//       </div>

//       <div className="border rounded-2xl p-4 flex flex-col gap-3 w-[300px]">
//         <div className="flex flex-col">
//           <span className="font-bold text-[24px]">Title</span> {todos[1].title}
//         </div>
//         <div className="flex flex-col">
//           <span className="font-bold text-[24px]">Description</span>{" "}
//           {todos[1].description}
//         </div>
//       </div>

//       <div className="border rounded-2xl p-4 flex flex-col gap-3 w-[300px]">
//         <div className="flex flex-col">
//           <span className="font-bold text-[24px]">Title</span> {todos[2].title}
//         </div>
//         <div className="flex flex-col">
//           <span className="font-bold text-[24px]">Description</span>{" "}
//           {todos[2].description}
//         </div>
//       </div> */}

//       {todos.map((todo, index) => (
//         <div key={index} className="border rounded-2xl p-4 flex flex-col gap-3 w-[300px]">
//           <div className="flex flex-col">
//             <span className="font-bold text-[24px]">Title</span> {todo.title}
//           </div>
//           <div className="flex flex-col">
//             <span className="font-bold text-[24px]">Description</span>{" "}
//             {todo.description}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    // 1. Fetch using the url
    const response = await fetch(url);

    // Convert the response into JSON
    const data = await response.json();

    setposts(data);

    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {posts.map((post, index) => (
            <div
              key={index}
              className="border rounded-2xl p-4 flex flex-col gap-3 w-[300px]"
            >
              <div className="flex flex-col">
                <span className="font-bold text-[24px]">UserId</span>{" "}
                {post.userId}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[24px]">id</span> {post.id}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[24px]">title</span>{" "}
                {post.title}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[24px]">body</span> {post.body}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
