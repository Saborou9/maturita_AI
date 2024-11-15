import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/api';
import { AuthContext } from '../services/AuthContext.jsx';

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate('/');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black py-4 fixed w-full top-0 z-50">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-white text-2xl font-bold">BusinessAI</Link>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-white hover:text-green-400 transition">Features</a>
          <a href="#benefits" className="text-white hover:text-green-400 transition">Benefits</a>
          <a href="#pricing" className="text-white hover:text-green-400 transition">Pricing</a>
        </div>
        {user ? (
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">
                {user.fullName.charAt(0).toUpperCase()}
              </div>
              <span className="ml-2 text-white hidden md:block">{user.fullName}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Settings
                </Link>
                <Link to="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Pricing
                </Link>
                <Link to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Account
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/signup"
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
          >
            Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
