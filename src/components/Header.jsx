import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../layout/MainLayout';

const Header = () => {
  const auth = useContext(authContext);
  const user = auth?.user;
  const handleLogout = auth?.handleLogout;
  const activeClass = 'text-amber-600 font-semibold bg-amber-50 px-3 py-2 rounded-lg';

  // Modern Logo Component
  const Logo = () => (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-xl font-bold">☕</span>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <div className="hidden sm:block">
        <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          BrewCraft
        </h1>
        <p className="text-xs text-gray-500 -mt-1">Artisan Coffee</p>
      </div>
    </div>
  );

  // Safety check - if context is not available, show basic navigation
  if (!auth) {
    return (
      <div className="navbar bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="navbar-start">
          <NavLink to="/" className="btn btn-ghost">
            <Logo />
          </NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-lg transition-colors'}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/coffees"
                className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-lg transition-colors'}
              >Coffees</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-xl w-52 border border-gray-200">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-lg transition-colors'}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/coffees"
                className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-lg transition-colors'}
              >Coffees</NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-lg transition-colors'}
                  >Dashboard</NavLink>
                </li>
                <li>
                  <button 
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/signin"
                    className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-lg transition-colors'}
                  >Sign In</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-lg transition-colors'}
                  >Sign Up</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost">
          <Logo />
        </NavLink>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-lg transition-colors'}
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/coffees"
              className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-lg transition-colors'}
            >Coffees</NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-lg transition-colors'}
                >Dashboard</NavLink>
              </li>
              <li>
                <button 
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors font-medium"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/signin"
                  className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-lg transition-colors'}
                >Sign In</NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700 px-3 py-2 rounded-lg transition-colors'}
                >Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
