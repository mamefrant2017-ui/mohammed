import React from 'react';
import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { Experience } from '../types';

const About: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Fullstack Developer Trainee",
      company: "Abuki Tech",
      period: "6 Months",
      description: "Intensive training program covering modern web technologies including React, Node.js, and Database management. Built multiple real-world projects."
    },
    {
      id: 2,
      role: "Freelance Developer",
      company: "Self-Employed",
      period: "Present",
      description: "Developing custom web solutions for clients, ranging from landing pages to e-commerce platforms. Maintenance and troubleshooting of electronic devices."
    },
    {
      id: 3,
      role: "Teacher & Mentor",
      company: "Various",
      period: "Ongoing",
      description: "Sharing knowledge in technology and electronics. Helping students understand complex concepts in management and tech."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A passionate technologist with a diverse background in Management, Web Development, and Electronics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-sky-500" size={28} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-slate-700">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-500"></div>
                <h4 className="text-lg font-semibold text-white">BA in Management</h4>
                <p className="text-sky-400 mb-1">Debre Birhan University</p>
                <p className="text-slate-400 text-sm">
                  Gained strong foundational knowledge in business administration, organizational behavior, and strategic planning.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-slate-700">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-500"></div>
                <h4 className="text-lg font-semibold text-white">Fullstack Development</h4>
                <p className="text-sky-400 mb-1">Abuki Tech</p>
                <p className="text-slate-400 text-sm">
                  Certified completion of comprehensive 6-month fullstack web development bootcamp.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-indigo-500" size={28} />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-slate-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-indigo-400">{exp.company}</p>
                    <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{exp.period}</span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;