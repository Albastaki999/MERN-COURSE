import React, { useEffect } from "react";
import SubChild2 from "./SubChild2";

const Child2 = () => {
  useEffect(() => {
    alert("Child 2 component rendered!");
  }, []);

  return (
    <div>
      Child 2
      {/* <SubChild2 /> */}
    </div>
  );
};

export default Child2;
