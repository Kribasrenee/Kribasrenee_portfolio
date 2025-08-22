import React from "react";
import { motion } from "framer-motion";
import PROFILE from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6 text-primary">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROFILE.projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="border rounded-xl p-5 shadow-md bg-white dark:bg-gray-900 
                       hover:shadow-xl hover:border-primary transition"
          >
            <h3 className="text-lg font-bold text-primary">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
