import React from "react";
import { motion } from "framer-motion";
import PROFILE from "../data/profile";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{PROFILE.tagline}</p>
      {/* Your education, achievements, leadership list (as before) */}
    </motion.section>
  );
}
