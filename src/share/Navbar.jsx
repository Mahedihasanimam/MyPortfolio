import { Link, NavLink, useLocation } from "react-router-dom"
import { LuMenu } from "react-icons/lu"
import { MdOutlineClose } from "react-icons/md"
import { FaHome } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { FaBlogger } from "react-icons/fa"
import { useMobileMenu } from "../hooks/UseMobileMenu"

const navItems = [
  { to: "/", label: "Home", icon: FaHome },
  { to: "/about", label: "About", icon: CgProfile },
  { to: "/services", label: "services", icon: CgProfile },
  { to: "/projects", label: "Projects", icon: CgProfile },
  { to: "/blog", label: "Blog", icon: FaBlogger },
]

const Navbar = () => {
  const location = useLocation()
  const { isOpen, toggleMenu } = useMobileMenu()

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl sm:text-3xl font-bold">
              <span className="text-green-500">M</span>EHEDI
              <span className="text-green-500">.</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <MdOutlineClose className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <LuMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
              onClick={toggleMenu}
            >
              <span className="flex items-center">
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

