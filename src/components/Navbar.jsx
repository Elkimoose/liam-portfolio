// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 bg-white bg-opacity-70 backdrop-blur-lg z-10 animate-slide-in">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-black">
          Portfolio
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center">
          <a href="#home" className="text-black mx-4 relative group">
            Hem
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
          </a>
          <a href="#projects" className="text-black mx-4 relative group">
            Projekt
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-black mx-4 relative group">
            Kontakt
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>
      </div>
      <Transition
        show={menuOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <div className="lg:hidden bg-white bg-opacity-90 backdrop-blur-lg p-4 absolute top-16 left-0 w-full shadow-lg">
          <div className="flex flex-col items-center">
            <a href="#home" onClick={handleMenuClick} className="text-black py-2 w-full text-center">
              Hem
            </a>
            <a href="#projects" onClick={handleMenuClick} className="text-black py-2 w-full text-center">
              Projekt
            </a>
            <a href="#contact" onClick={handleMenuClick} className="text-black py-2 w-full text-center">
              Kontakt
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
