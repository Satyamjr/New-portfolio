
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Invoice Generator',
    tech: 'React, Firebase, Chakra UI, Vite, Netlify',
    description: 'A full-stack web app to generate and manage invoices...',
    github: 'https://github.com/Satyamjr/invoice-generator',
    demo: 'https://your-invoice-demo.netlify.app',
  },
  {
    title: 'Personal Portfolio Website',
    tech: 'React, Tailwind CSS, Firebase, GSAP, EmailJS',
    description: 'A fast, animated, and responsive portfolio...',
    github: 'https://github.com/Satyamjr/New-portfolio',
    demo: 'https://github.com/Satyamjr/New-portfolio',
  },
  {
    title: 'Classic Pac-Man Game',
    tech: 'Java, JavaFX',
    description: 'A Java-based desktop clone of Pac-Man...',
    github: 'https://github.com/Satyamjr/Pacman',
    demo: '',
  },
  {
    title: '2D Snake Game with Multiplayer',
    tech: 'Java, Swing',
    description: 'Built a Snake game with multiplayer, collision detection...',
    github: 'https://github.com/Satyamjr/snake-game',
    demo: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-white via-[#f8f9fa] to-[#f1f5f9]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Projects</h2>
        <p className="text-lg text-gray-600 mb-12">A few things I've built recently</p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
              <p className="text-sm text-orange-600 mt-1 font-medium">Tech Stack: {project.tech}</p>
              <p className="text-gray-700 mt-3 text-sm">{project.description}</p>
              <div className="mt-4 flex gap-4">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline gap-1">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 hover:underline gap-1">
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
