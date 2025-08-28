import React from 'react';
import { Code, Palette, Users, Zap, Brain, Globe } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Programming Languages',
    items: ['C', 'Python', 'Java'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Globe,
    title: 'Frontend Technologies',
    items: ['HTML', 'CSS', 'React'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Backend & Database',
    items: ['Node.js', 'MongoDB', 'SQL'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Tools & Platforms',
    items: ['GitHub', 'Docker', 'Visual Studio Code'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Brain,
    title: 'Core Competencies',
    items: ['Problem Solving', 'Analytical Thinking', 'Team Collaboration'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Palette,
    title: 'Languages',
    items: ['Tamil (Native)', 'English (Proficient)', 'Hindi (Intermediate)'],
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive skill set built through years of experience and continuous learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">{skill.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}