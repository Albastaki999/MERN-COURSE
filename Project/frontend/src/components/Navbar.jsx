import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();

    navigate("/");
  };

  return (
    <div className="bg-[#FEF8F6] flex justify-end font-ui font-semibold text-[10px] xl:text-[14px] py-4 px-4 select-none fixed w-full top-0 left-0 h-fit">
      <div className="flex justify-between w-full">
        <div className="cursor-pointer">
          <Link to="/">Logo</Link>
        </div>
        {user ? (
          <div className="font-ui font-medium flex gap-4 items-center">
            <div>
              <div className="text-[14px] ">{user.fullName}</div>
              <div className="text-end text-[#89726C] text-[11px]">
                @{user.username}
              </div>
            </div>
            <div
              className="text-button-primary cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut />
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            <div className="py-2 px-4 rounded-[4px] bg-white cursor-pointer">
              <Link to="/signin">Sign In</Link>
            </div>
            <div className="bg-button-primary text-white py-2 px-4 rounded-[4px] cursor-pointer">
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
