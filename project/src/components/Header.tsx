import React from 'react';
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Code2 } from 'lucide-react';

interface HeaderProps {
  onDownloadResume: () => void;
}

export default function Header({ onDownloadResume }: HeaderProps) {
  const handleDownloadClick = () => {
    try {
      // Try direct window.open first
      window.open('/Kribasrenee Resume.pdf', '_blank');
    } catch (error) {
      // Fallback to the original method
      onDownloadResume();
    }
  };

  return (
    <header id="home" className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white pt-16">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Kribasrenee S A
            </h1>
            <p className="text-xl lg:text-2xl text-purple-200 mb-6">
              Aspiring Software Developer
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>kribasrenee19@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Erode, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a 
                  href="https://linkedin.com/in/Kribasrenee" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-200 transition-colors duration-300 flex items-center gap-1"
                >
                  linkedin.com/in/Kribasrenee
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a 
                  href="https://github.com/Kribasrenee" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-200 transition-colors duration-300 flex items-center gap-1"
                >
                  github.com/Kribasrenee
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <a 
                  href="https://leetcode.com/u/Kribasrenee/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-200 transition-colors duration-300 flex items-center gap-1"
                >
                  leetcode.com/u/Kribasrenee
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleDownloadClick}
              className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}