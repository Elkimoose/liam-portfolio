// src/components/Projects.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="bg-white h-auto lg:h-screen py-20" style={{ minHeight: '100vh' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Mina Projekt</h2>
        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-3 ${inView ? 'animate-fade-up translate-y-0' : 'opacity-0 translate-y-15'}`}>
          {[{ src: project1, alt: 'Project 1', link: '#link1' },
            { src: project2, alt: 'Project 2', link: '#link2' },
            { src: project3, alt: 'Project 3', link: '#link3' }].map((project, index) => (
              <a href={project.link} key={index} className="shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img src={project.src} alt={project.alt} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{project.alt}</h3>
                  <p className="mt-2">Beskrivning av {project.alt.toLowerCase()}.</p>
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
