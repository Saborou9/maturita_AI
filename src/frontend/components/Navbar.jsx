import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">BusinessAI</div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-white hover:text-green-400 transition">Features</a>
          <a href="#benefits" className="text-white hover:text-green-400 transition">Benefits</a>
          <a href="#pricing" className="text-white hover:text-green-400 transition">Pricing</a>
        </div>
        <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
