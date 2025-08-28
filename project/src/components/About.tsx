import React from 'react';
import { User, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Aspiring programmer with a consistent practice in programming and problem-solving skills. 
              I am seeking opportunities to apply my skills in real-world projects and contribute meaningfully to a 
              dynamic tech team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}