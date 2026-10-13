import React, { useState } from "react";
import LightOff from "./LightOff";
import LightOn from "./LightOn";

const SpecialButton = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <div
      onClick={() => {
        setIsLightOn(!isLightOn);
      }}
    >
      {isLightOn ? <LightOn /> : <LightOff />}
    </div>
  );
};

export default SpecialButton;
