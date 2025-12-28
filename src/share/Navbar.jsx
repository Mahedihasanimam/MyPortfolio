import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import {
  FaHome,
  FaBlogger,
  FaProjectDiagram,
  FaPhoneAlt,
  FaCode,
} from "react-icons/fa";
import { CgProfile, CgWebsite } from "react-icons/cg";

const navItems = [
  { to: "/", label: "Home", icon: FaHome },
  { to: "/about", label: "About", icon: CgProfile },
  { to: "/services", label: "Services", icon: CgWebsite },
  { to: "/projects", label: "Projects", icon: FaProjectDiagram },
  { to: "/blog", label: "Blog", icon: FaBlogger },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Mobile Menu Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md border-gray-800 py-2 shadow-lg"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* --- Logo --- */}
          <Link to="/" className="group flex items-center space-x-2">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
              <FaCode className="text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">
                MEHEDI
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-medium">
                Developer
              </span>
            </div>
          </Link>

          {/* --- Desktop Navigation --- */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-800/50 p-1.5 rounded-full border border-gray-700/50 backdrop-blur-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="desktop-nav"
                        className="absolute inset-0 bg-emerald-600 rounded-full shadow-sm"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* --- Desktop CTA --- */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-lg bg-white text-gray-900 text-sm font-bold hover:bg-emerald-50 transition-colors shadow-lg shadow-white/5"
            >
              Let's Talk
            </Link>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <MdOutlineClose size={28} /> : <LuMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden overflow-hidden bg-gray-900 border-b border-gray-800"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navItems.map((item, i) => (
                <motion.div custom={i} variants={linkVariants} key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center space-x-4 p-4 rounded-xl transition-all ${
                        isActive
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "text-gray-400 hover:bg-gray-800 hover:text-white"
                      }`
                    }
                  >
                    <item.icon className="text-xl" />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                custom={navItems.length}
                variants={linkVariants}
                className="pt-4 mt-4 border-t border-gray-800"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold shadow-lg"
                >
                  <FaPhoneAlt className="mr-2" /> Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
