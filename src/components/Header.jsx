import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../layout/MainLayout';

const Header = () => {
  const auth = useContext(authContext);
  const user = auth?.user;
  const handleLogout = auth?.handleLogout;
  const activeClass = 'text-orange-500 font-semibold';

  // Safety check - if context is not available, show basic navigation
  if (!auth) {
    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <NavLink to="/" className="btn btn-ghost text-xl">COFFEE_SHOP</NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? activeClass : undefined}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/coffees"
                className={({ isActive }) => isActive ? activeClass : undefined}
              >Coffees</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? activeClass : undefined}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/coffees"
                className={({ isActive }) => isActive ? activeClass : undefined}
              >Coffees</NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) => isActive ? activeClass : undefined}
                  >Dashboard</NavLink>
                </li>
                <li>
                  <button 
                    onClick={handleLogout}
                    className="text-red-500 hover:text-red-700"
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
                    className={({ isActive }) => isActive ? activeClass : undefined}
                  >Sign In</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) => isActive ? activeClass : undefined}
                  >Sign Up</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">COFFEE_SHOP</NavLink>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? activeClass : undefined}
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/coffees"
              className={({ isActive }) => isActive ? activeClass : undefined}
            >Coffees</NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => isActive ? activeClass : undefined}
                >Dashboard</NavLink>
              </li>
              <li>
                <button 
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-700 font-medium"
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
                  className={({ isActive }) => isActive ? activeClass : undefined}
                >Sign In</NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) => isActive ? activeClass : undefined}
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
