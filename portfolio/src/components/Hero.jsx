import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import PROFILE from "../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 text-center bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
    >
      <h1 className="text-5xl font-extrabold drop-shadow-lg">{PROFILE.name}</h1>
      <p className="mt-3 text-xl">{PROFILE.role}</p>
      <p className="mt-2 max-w-2xl mx-auto">{PROFILE.tagline}</p>

      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <a
          href={PROFILE.resumeUrl}
          className="px-4 py-2 border rounded-2xl bg-white text-primary font-semibold 
                     hover:bg-primary hover:text-white transition"
        >
          <Download size={16} /> Resume
        </a>
        <a
          href={PROFILE.social.github}
          className="px-4 py-2 border rounded-2xl hover:bg-primary hover:text-white transition"
        >
          <Github size={16} /> GitHub
        </a>
        <a
          href={PROFILE.social.linkedin}
          className="px-4 py-2 border rounded-2xl hover:bg-secondary hover:text-white transition"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
      </div>
    </section>
  );
}
