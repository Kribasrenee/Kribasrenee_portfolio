import React from "react";
import { motion } from "framer-motion";
import PROFILE from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6 text-primary">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {PROFILE.skills.map((skill, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex justify-between mb-1 text-sm">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
