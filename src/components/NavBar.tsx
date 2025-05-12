import React from "react";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { FaFile, FaGear, FaPen } from "react-icons/fa6";

const navBarButtonStyle = "text-zinc-500 hover:text-white cursor-pointer";

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between w-15 border border-solid border-zinc-400 left-0 bg-zinc-900  py-4">
      <div className="flex flex-col items-center w-full h-auto gap-4">
        <FaFile className={navBarButtonStyle} size={35} />
        <FaSearch className={navBarButtonStyle} size={35} />
        <FaPen className={navBarButtonStyle} size={35} />
      </div>
      <div className="flex flex-col items-center w-full h-auto gap-4">
        <FaRegUser className={navBarButtonStyle} size={35} />
        <FaGear className={navBarButtonStyle} size={35} />
      </div>
    </div>
  );
};

export default NavBar;
