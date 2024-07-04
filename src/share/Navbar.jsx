import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBlogger } from "react-icons/fa";
const Navbar = () => {
  const [open, setopen] = useState(false);

  const navbar = (
    <div className="gap-8 lg:flex md:flex  items-center bg-[#1D232A] space-y-2 ">
      <li className="font-semibold text-lg">
      <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-green-500 p-0  border-b-2 pt-2 border-[#1D232A]   hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
          : "border-b-2 p-0  border-[#1D232A]  hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
      }
    >
      <FaHome className="lg:hidden md:hidden" /> Home
    </NavLink>
      </li>
      <li className="font-semibold text-lg ">
      <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive
          ? "text-green-500 p-0  border-b-2 border-[#1D232A]   hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
          : "border-b-2 p-0  border-[#1D232A]  hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
      }
    >
      <CgProfile className="lg:hidden md:hidden" /> About
    </NavLink>
      </li>
      <li className="font-semibold text-lg ">
      <NavLink
      to="/projects"
      className={({ isActive }) =>
        isActive
          ? "text-green-500 p-0  border-b-2 border-[#1D232A]   hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
          : "border-b-2 p-0  border-[#1D232A]  hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
      }
    >
      <CgProfile className="lg:hidden md:hidden" /> Projects
    </NavLink>
      </li>
      <li className="font-semibold text-lg ">
      <NavLink
      to="/blog"
      className={({ isActive }) =>
        isActive
          ? "text-green-500 p-0  border-b-2 border-[#1D232A]  hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
          : "border-b-2 p-0  border-[#1D232A]  hover:border-b-2 hover:border-green-500 hover:animate-underline hover:rounded-none"
      }
    >
      <FaBlogger className="lg:hidden md:hidden" /> Blog
    </NavLink>
      </li>
     
    </div>
  );
  return (
    <div className="bg-[#1D232A] text-white" >
      <div className="navbar container  mx-auto  bg-[#1D232A] px-12   w-full  shadow-sm">
      <div className="navbar-start flex lg:justify-start md:justify-start justify-between  w-full">
        <div className="dropdown">
          <div className="md:hidden pr-2" onClick={() => setopen(!open)}>
            {open === true ? (
              <MdOutlineClose className="text-2xl "></MdOutlineClose>
            ) : (
              <LuMenu className="text-2xl"></LuMenu>
            )}
            <ul
              className={`menu absolute duration-1000
            ${open ? "-right-32 px-8" : "right-20"}
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
