import React from 'react';
import { ExternalLink, Github, Code, Database } from 'lucide-react';

const projects = [
  {
    title: 'Suvai - The Home Chef Online Food Ordering Page',
    description: 'A full-stack web application connecting customers with home chefs to order fresh homemade meals. Built using MongoDB, React.js, Node.js with features like kitchen listings, order management, and user authentication.',
    technologies: ['React.js', 'Node.js', 'MongoDB'],
    icon: Code,
    githubLink: 'https://github.com/Kribasrenee',
    color: 'from-blue-500 to-cyan-500'
  }
];

const certifications = [
  {
    title: 'Project Titled Blood Group Detection on Fingerprint using Deep Learning in Ideathon',
    organization: 'Kongu Engineering College',
    year: '2024',
    icon: Database,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Academic Excellence Award',
    organization: 'Kongu Engineering College',
    year: '2024',
    icon: Database,
    color: 'from-green-500 to-emerald-500'
  }
];

const leadership = [
  {
    title: 'Class Representative - Semester 2',
    organization: 'Kongu Engineering College',
    description: 'Represented the class in academic and administrative matters',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'NCC Head - Association ICT UG',
    organization: 'Kongu Engineering College',
    description: 'Hosted various events and workshops for the student community',
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Projects Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcasing my technical skills through real-world applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center flex-shrink-0`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4`}>
                <cert.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{cert.title}</h3>
              <p className="text-slate-600 mb-1">{cert.organization}</p>
              <p className="text-sm text-slate-500">{cert.year}</p>
            </div>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Leadership Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((role, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${role.color} flex items-center justify-center mb-4`}>
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{role.title}</h3>
              <p className="text-slate-600 mb-2">{role.organization}</p>
              <p className="text-sm text-slate-500">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}