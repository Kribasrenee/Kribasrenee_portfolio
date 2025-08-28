import React from 'react';
import { Cloud, BarChart3 } from 'lucide-react';

export default function AreasOfInterest() {
  const interests = [
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Passionate about cloud technologies and scalable solutions for modern applications.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Interested in extracting insights from data to drive informed decision-making.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="areas-of-interest" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Areas of Interest</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My primary areas of focus and passion in technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${interest.color} flex items-center justify-center mb-6`}>
                <interest.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">{interest.title}</h3>
              <p className="text-slate-600 leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}