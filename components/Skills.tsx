import React from 'react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const skillSet: Skill[] = [
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3 / Tailwind", level: 90, category: "Frontend" },
    { name: "JavaScript (ES6+)", level: 85, category: "Frontend" },
    { name: "React & TypeScript", level: 80, category: "Frontend" },
    { name: "Bootstrap", level: 90, category: "Frontend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "Python", level: 70, category: "Backend" },
    { name: "Databases (SQL/NoSQL)", level: 75, category: "Backend" },
    { name: "Git & GitHub", level: 85, category: "Tools" },
    { name: "Electronics Repair", level: 90, category: "Electronics" },
  ];

  const categories = Array.from(new Set(skillSet.map(s => s.category)));

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">My technical toolkit and proficiency levels.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-slate-900 rounded-xl p-6 shadow-xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">{category}</h3>
              <div className="space-y-4">
                {skillSet.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs font-medium text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          category === 'Frontend' ? 'bg-sky-500' :
                          category === 'Backend' ? 'bg-indigo-500' :
                          category === 'Electronics' ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;