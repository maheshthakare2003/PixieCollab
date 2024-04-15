import React from 'react';
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <nav className="bg-gray-800 w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/"><img className="h-8 w-auto"  src="/icon.png" alt="Pixie" /></NavLink>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                <NavLink to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</NavLink>
                <NavLink to="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink>
                <NavLink to="chat" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Chat</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
