import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineUpdate } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
const Navbar = () => {
  const [open, setopen] = useState(false);

  const navbar = (
    <div className="gap-4 lg:flex md:flex flex-row bg-[#1D232A] ">
      <li className="font-semibold ">
      <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-green-500 p-0  border-b-2 border-[#1D232A]  hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
          : "border-b-2 p-0  border-[#1D232A]  hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
      }
    >
      <FaHome className="lg:hidden md:hidden" /> Home
    </NavLink>
      </li>
      <li className="font-semibold ">
      <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive
          ? "text-green-500 p-0  border-b-2 border-[#1D232A]   hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
          : "border-b-2 p-0  border-[#1D232A]  hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
      }
    >
      <FaHome className="lg:hidden md:hidden" /> About
    </NavLink>
      </li>
      <li className="font-semibold ">
      <NavLink
      to="/blog"
      className={({ isActive }) =>
        isActive
          ? "text-green-500 p-0  border-b-2 border-[#1D232A]  hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
          : "border-b-2 p-0  border-[#1D232A]  hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
      }
    >
      <FaHome className="lg:hidden md:hidden" /> Blog
    </NavLink>
      </li>
     
    </div>
  );
  return (
    <div className="bg-[#1D232A] text-white" >
      <div className="navbar container mx-auto  px-12  w-full  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div className="md:hidden pr-2" onClick={() => setopen(!open)}>
            {open === true ? (
              <MdOutlineClose className="text-2xl "></MdOutlineClose>
            ) : (
              <LuMenu className="text-2xl"></LuMenu>
            )}
            <ul
              className={`menu absolute duration-1000
            ${open ? "-right-40 px-8" : "right-10"}
            mt-3 z-[2] p-2 shadow bg-[#1D232A] h-lvh w-52`}
            >
              {navbar}
            </ul>
          </div>
        </div>
        <Link
          to={"/"}
          className="lg:text-4xl no-underline  text-xl font-bold"
        >
          <span className="text-green-500">M</span>EHEDI<span className="text-green-500">.</span>
        </Link>
      </div>
      <div className="navbar-end md:flex hidden  lg:flex pr-12">
        <ul className="menu menu-horizontal px-1">{navbar}</ul>
      </div>

      {/* <div className="navbar-end">
        <div className=" px-4"></div>
      </div> */}
    </div>
    </div>
  );
};

export default Navbar;
