import React from "react";
import PROFILE from "../data/profile";

export default function Footer() {
  return (
   <footer className="py-6 text-center text-sm bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300">
  © {new Date().getFullYear()} {PROFILE.name} • Built with 💚 React & Tailwind
</footer>

  );
}
