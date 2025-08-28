import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Science in Information Systems',
    institution: 'Kongu Engineering College, Perundurai',
    duration: 'July 2024 - Present',
    grade: 'CGPA: 9.83/10',
    status: 'Current',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    degree: 'Higher Secondary Certification',
    institution: 'Geethaanjali All India Sr Sec School',
    duration: 'June 2023 - April 2024',
    grade: 'Percentage: 94.8/100',
    status: 'Completed',
    color: 'from-purple-500 to-pink-500'
  },
  {
    degree: 'Secondary School Leaving Certification',
    institution: 'Geethaanjali All India Sr Sec School',
    duration: 'June 2021 - April 2022',
    grade: 'Percentage: 94.2/100',
    status: 'Completed',
    color: 'from-green-500 to-emerald-500'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Academic journey showcasing consistent excellence and dedication to learning
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2 lg:mb-0">
                        {edu.degree}
                      </h3>
                    </div>
                      
                    
                    <p className="text-lg text-slate-600 mb-3 font-medium">
                      {edu.institution}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span className="font-semibold text-slate-700">{edu.grade}</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}