import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-end bg-black text-white gap-4 p-4">
      <Link to="/">
        <span className="text-xl font-bold hover:text-gray-300 ">Home</span>
      </Link>
      <Link to="owner">
        <span className="text-xl font-bold hover:text-gray-300 ">Owner</span>
      </Link>
    </nav>
  );
};

export default Navbar;
