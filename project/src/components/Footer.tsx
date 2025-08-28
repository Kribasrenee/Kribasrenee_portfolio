import React from 'react';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Kribasrenee S A</h3>
            <p className="text-slate-400">Aspiring Software Developer</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="mailto:kribasrenee19@gmail.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/Kribasrenee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Kribasrenee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            © 2025 Kribasrenee S A
          </p>
        </div>
      </div>
    </footer>
  );
}