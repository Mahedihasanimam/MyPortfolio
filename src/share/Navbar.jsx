import React from "react";


import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { 
  FaHome, 
  FaBlogger, 
  FaProjectDiagram, 
  FaPhoneAlt 
} from "react-icons/fa";
import { 
  CgProfile, 
  CgWebsite 
} from "react-icons/cg";

const navItems = [
  { to: "/", label: "Home", icon: FaHome },
  { to: "/about", label: "About", icon: CgProfile },
  { to: "/services", label: "Services", icon: CgWebsite },
  { to: "/projects", label: "Projects", icon: FaProjectDiagram },
  { to: "/blog", label: "Blog", icon: FaBlogger },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close mobile menu when route changes
  React.useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 fixed w-full z-50 transition-all duration-300 hover:bg-gray-900/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="group flex items-center"
          >
            <motion.div 
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <motion.div 
                className="absolute -inset-1 rounded-full border-2 border-emerald-500 opacity-0 group-hover:opacity-100"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <span className="ml-3 text-xl font-bold tracking-tight text-white">
              MEHEDI<span className="text-emerald-400">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative group`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={`relative z-10 ${isActive ? "text-emerald-400" : "text-gray-400 hover:text-white"}`}>
                        {item.label}
                      </span>
                      {isActive && (
                        <motion.div 
                          className="absolute bottom-1 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      {!isActive && (
                        <motion.div 
                          className="absolute inset-0 bg-gray-800/50 rounded-lg -z-10 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all"
                          initial={false}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
            
            {/* Contact Button - Desktop */}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 flex items-center group"
            >
              Contact Me
              <svg 
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 focus:outline-none transition-all"
              aria-expanded={isOpen}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <MdOutlineClose className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <LuMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          >
            <motion.div 
              className="absolute top-16 right-4 left-4 bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl overflow-hidden"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-4 rounded-lg text-lg font-medium transition-all duration-300 ${
                        isActive 
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "text-gray-300 hover:bg-gray-700/50"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <item.icon
                          className={`mr-3 h-5 w-5 flex-shrink-0 ${
                            isActive ? "text-emerald-400" : "text-gray-400"
                          }`}
                        />
                        {item.label}
                        {isActive && (
                          <motion.span 
                            className="ml-auto w-2 h-2 rounded-full bg-emerald-400"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}

                <Link
                  to="/contact"
                  className="flex items-center justify-center px-4 py-4 mt-2 rounded-lg text-lg font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white group"
                >
                  <FaPhoneAlt className="mr-2" />
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;