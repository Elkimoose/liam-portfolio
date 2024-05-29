// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto text-center text-white">
        <nav className="mb-4">
          <a href="#home" className="text-white mx-4">Hem</a>
          <a href="#projects" className="text-white mx-4">Projekt</a>
          <a href="#contact" className="text-white mx-4">Kontakt</a>
        </nav>
        &copy; {new Date().getFullYear()} Din Portfolio. Alla rättigheter reserverade.
      </div>
    </footer>
  );
};

export default Footer;
