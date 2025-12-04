import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-sky-400 uppercase bg-sky-900/30 rounded-full border border-sky-700/50">
            Available for Hire
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Mohammed Ali</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0">
            Fullstack Developer, Electronics Technician, and Educator based in Addis Ababa. 
            I build robust web applications and solve complex technical problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
            <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-lg shadow-sky-900/20">
              View Projects
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 bg-slate-800/50 hover:bg-slate-800 transition-colors">
              Contact Me
              <Mail className="ml-2 -mr-1 w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <div className="h-6 w-px bg-slate-700"></div>
            <span className="text-sm font-medium">Addis Ababa, Ethiopia</span>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
             {/* Using a placeholder for profile image */}
            <img 
              src="https://picsum.photos/seed/mohammed/400/400" 
              alt="Mohammed Ali" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;