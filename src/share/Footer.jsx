import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#262e37]  text-white ">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3 ">
          <Link
            to={"/"}
            className="lg:text-4xl no-underline  text-xl font-bold"
          >
            <span className="text-green-500">M</span>EHEDI
            <span className="text-green-500">.</span>
          </Link>
          <div className="space-y-3">
            <div className="uppercase dark:text-gray-900"></div>
            <div className="flex justify-start space-x-6">
              <Link
                target="_blank"
                to={"https://www.facebook.com/profile.php?id=100064053792788"}
              >
                <FaFacebook size={25} />
              </Link>
              <Link target="_blank" to={"https://github.com/Mahedihasanimam"}>
                <FaGithub size={25} />
              </Link>

              <Link
                target="_blank"
                to={"https://www.linkedin.com/in/mehedi60/"}
              >
                <CiLinkedin size={25} />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              Quick Actions
            </h3>
            <ul className="space-y-1">
              <li>
                <Link className="hover:border-b-2 border-green-500" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-2 border-green-500"
                  to={"/about"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-2 border-green-500"
                  to={"/blog"}
                >
                  blog
                </Link>
              </li>
              <li>
                <a
                  className="hover:border-b-2 border-green-500"
                  href="/src/assets/Mehedi_resume(front-end developer).pdf"
                  download={"mehedi resume"}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
             TopSkills
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" x>
                  Front-end development
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" >
                  Jr.MERN stack development
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-900">Contact with us</h3>
            <ul className="space-y-1">
              <li>
                <a className="flex items-center gap-2" >
                 <MdEmail className="text-green-400"/> mdmehedihasen678@gmail.com
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2" >
                <FaPhoneAlt className="text-green-400"/>+8801860650703
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2">
                 <IoLocation className="text-green-400"/> mymensingh,Bangladesh
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © 2024 <span className="text-green-500">M</span>EHEDI<span className="text-green-500">.</span>All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
