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
            <img
              src="/icons/icon-32x32.ico"
              alt="小斗笠直播工具"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">小斗笠直播工具</span>
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
              首页
            </NavLink>
            <NavLink
              to="/downloads"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-600 font-medium"
                  : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
              }
            >
              下载软件
            </NavLink>
            <NavLink
              to="/plugins"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-600 font-medium"
                  : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
              }
            >
              插件工具
            </NavLink>
            <NavLink
              to="/tutorials"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-600 font-medium"
                  : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
              }
            >
              使用教程
            </NavLink>
            <NavLink
              to="/equipment"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-600 font-medium"
                  : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
              }
            >
              设备推荐
            </NavLink>
            <NavLink
              to="/debug"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-600 font-medium"
                  : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
              }
            >
              技术支持
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-600 font-medium"
                  : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
              }
            >
              联系我们
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
                首页
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
                下载软件
              </NavLink>
              <NavLink
                to="/plugins"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary-600 font-medium"
                    : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                插件工具
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
                使用教程
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
                设备推荐
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
                技术支持
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
                联系我们
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
