// src/components/Hero.jsx
import React from 'react';
import profileImage from '../assets/images/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="bg-gray-200 h-screen flex items-center justify-center text-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:text-left animate-fade-in">
        <img src={profileImage} alt="Profile" className="w-60 h-60 lg:w-64 lg:h-64 rounded-full mb-4 lg:mb-0 lg:mr-8 shadow-lg" />
        <div>
          <h1 className="text-4xl font-bold">Hej, <br /> jag är Liam</h1>
          <p className="text-lg mt-4 ">Jag är en utvecklare som älskar att skapa <br /> vackra och funktionella webbplatser för <br /> företag och privatpersoner!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
