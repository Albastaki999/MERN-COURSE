import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login(username, password);

    const from = location.state?.from;
    console.log(from);

    const destination =
      from?.pathname?.startsWith("/") && !from.pathname.startsWith("//")
        ? from.pathname
        : "/";
    console.log(destination);

    navigate(destination, { replace: true });
  };
  return (
    <div className="w-full h-full border flex justify-center items-center">
      <div className="bg-white p-[44px] rounded-[8px]">
        <div className="flex gap-2 items-center bg-[#F2EDEB] rounded-[12px] px-2 py-1 font-ui font-medium text-[11px]">
          <div className="w-[8px] h-[8px] rounded-full bg-[#994126]"></div>
          <div className="text-[#56423D]">WELCOME BACK</div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#994126]"></div>
        </div>
        {/* <div className="flex flex-col gap-2">
          <input
            className="border"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            className="border"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div onClick={handleLogin}>Login</div>
        </div> */}
      </div>
    </div>
  );
};

export default Signin;
