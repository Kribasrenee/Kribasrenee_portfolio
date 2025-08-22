import React, { useState, useEffect } from "react";
import PROFILE from "../data/profile";

export default function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-gradient-to-r from-green-600 to-blue-500 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Brand / Name */}
        <a href="#home" className="font-bold text-xl text-white drop-shadow">
          {PROFILE.name}
        </a>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative group transition-all ${
                active === link.id
                  ? "text-yellow-300 font-bold"
                  : "hover:text-yellow-200"
              }`}
            >
              {link.label}
              {/* Animated underline */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
