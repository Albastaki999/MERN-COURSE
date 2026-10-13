import React, { useEffect } from "react";

const SubChild2 = () => {
  useEffect(() => {
    alert("Subchild 2 rendered!");
  }, []);
  return <div>SubChild 2</div>;
};

export default SubChild2;
