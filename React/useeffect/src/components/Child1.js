import React, { useEffect } from "react";
import SubChild1 from "./SubChild1";

const Child1 = () => {
  useEffect(() => {
    alert("Child 1 rendered");

    // Unmount function
    return () => {
      alert("Hello");
    };
  }, []);

  return <div>Child 1{/* <SubChild1 /> */}</div>;
};

export default Child1;
