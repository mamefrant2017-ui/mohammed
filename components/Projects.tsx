import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Alfatih Academy",
      category: "Education",
      description: "A comprehensive educational platform for Alfatih Academy, featuring student enrollment and course details.",
      image: "https://picsum.photos/seed/alfatih/600/400",
      techStack: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Fruit Lover Box",
      category: "E-Commerce",
      description: "Subscription service UI for fruit delivery. Fresh, modern design focusing on user experience.",
      image: "https://picsum.photos/seed/fruitbox/600/400",
      techStack: ["HTML", "CSS", "JS"]
    },
    {
      id: 3,
      title: "Apple Homepage Clone",
      category: "Clone",
      description: "A pixel-perfect recreation of the Apple homepage to demonstrate high-fidelity frontend skills.",
      image: "https://picsum.photos/seed/apple/600/400",
      techStack: ["React", "Tailwind"]
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "Web App",
      description: "Full-featured online store with cart functionality, product listings, and checkout process.",
      image: "https://picsum.photos/seed/shop/600/400",
      techStack: ["React", "Redux", "Node.js"]
    },
    {
      id: 5,
      title: "Calculator App",
      category: "Tool",
      description: "A sleek, functional calculator application handling complex arithmetic operations.",
      image: "https://picsum.photos/seed/calc/600/400",
      techStack: ["JavaScript", "CSS"]
    },
    {
      id: 6,
      title: "Fruit Lover Page",
      category: "Landing Page",
      description: "An engaging landing page designed to market fresh fruit products.",
      image: "https://picsum.photos/seed/fruitland/600/400",
      techStack: ["Bootstrap", "HTML"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">A selection of my recent work.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-sky-900/20 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <span className="absolute top-4 right-4 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-sky-300 bg-sky-900/30 px-2 py-1 rounded border border-sky-800">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg transition-colors text-sm font-medium">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 border border-slate-600 hover:bg-slate-700 text-slate-300 py-2 rounded-lg transition-colors text-sm font-medium">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;