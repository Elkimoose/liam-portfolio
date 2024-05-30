// src/components/Projects.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

const Projects = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      ref: ref1,
      inView: inView1,
      src: project1,
      alt: 'Cookie Clicker',
      link: '#link1',
      description: 'Ett spel där man klickar på en kaka med simpla designer',
    },
    {
      ref: ref2,
      inView: inView2,
      src: project2,
      alt: 'UI/UX Design',
      link: '#link2',
      description: 'Avancerade UI/UX designer som jag nyligen skapat',
    },
    {
      ref: ref3,
      inView: inView3,
      src: project3,
      alt: 'Apple Design',
      link: '#link3',
      description: 'Fina designer på bilder jag gjort med verktyg',
    },
  ];

  return (
    <section id="projects" className="bg-white h-auto lg:h-screen py-20" style={{ minHeight: '100vh' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Mina Projekt</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 ${inView1 ? 'animate-fade-up' : 'opacity-0'}`}>
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              ref={project.ref}
              className={`shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105`}
            >
              <img src={project.src} alt={project.alt} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.alt}</h3>
                <p className="mt-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
