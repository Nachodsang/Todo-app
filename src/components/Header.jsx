import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full  bg-gradient-to-br from-[#6EE2F5]/50 to-[#6454F0] z-10 relative">
      <div className="max-w-[1040px] mx-auto py-4 px-6 text-xl font-semibold text-gray-100  ">
        <div className="flex justify-between">
          {/* Logo */}
          <Link to="/" className="text-sm md:text-xl">
            Todo List
          </Link>
          {/* menu or detail */}
          <div className="md:text-lg text-sm">Make everyday worth it!</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
