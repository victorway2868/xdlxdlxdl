import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <svg 
              className="h-8 w-8 text-primary-600" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M4 8H2v12a2 2 0 002 2h12v-2H4V8z" />
              <path d="M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-9 12V6l7 4-7 4z" />
            </svg>
            <span className="text-xl font-bold text-gray-900 dark:text-white">StreamAssist</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 font-medium" 
                  : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/downloads" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 font-medium" 
                  : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
              }
            >
              Downloads
            </NavLink>
            <NavLink 
              to="/tutorials" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 font-medium" 
                  : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
              }
            >
              Tutorials
            </NavLink>
            <NavLink 
              to="/equipment" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 font-medium" 
                  : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
              }
            >
              Equipment
            </NavLink>
            <NavLink 
              to="/debug" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 font-medium" 
                  : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
              }
            >
              Debug
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 font-medium" 
                  : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary-600 dark:text-gray-300 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-600 font-medium" 
                    : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
                }
                end
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/downloads" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-600 font-medium" 
                    : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Downloads
              </NavLink>
              <NavLink 
                to="/tutorials" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-600 font-medium" 
                    : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Tutorials
              </NavLink>
              <NavLink 
                to="/equipment" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-600 font-medium" 
                    : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Equipment
              </NavLink>
              <NavLink 
                to="/debug" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-600 font-medium" 
                    : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Debug
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-600 font-medium" 
                    : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
