import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import AreasOfInterest from './components/AreasOfInterest';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const handleDownloadResume = () => {
    try {
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = '/Kribasrenee Resume.pdf';
      link.download = 'Kribasrenee_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open('/Kribasrenee Resume.pdf', '_blank');
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Header onDownloadResume={handleDownloadResume} />
      <About />
      <AreasOfInterest />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;