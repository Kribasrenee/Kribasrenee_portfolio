import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import PROFILE from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6 text-primary">Contact</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>Let’s connect! Reach out to me:</p>
          <p className="flex items-center gap-2"><Mail size={16}/> {PROFILE.email}</p>
          <p className="flex items-center gap-2"><Phone size={16}/> {PROFILE.phone}</p>
          <p className="flex items-center gap-2"><MapPin size={16}/> {PROFILE.location}</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget));
            window.location.href = `mailto:${PROFILE.email}?subject=Message from ${data.name}&body=${data.message}`;
          }}
          className="space-y-4"
        >
          <input name="name" placeholder="Your Name" className="w-full border rounded-lg px-3 py-2" />
          <input name="email" type="email" placeholder="Your Email" className="w-full border rounded-lg px-3 py-2" />
          <textarea name="message" rows="4" placeholder="Your Message" className="w-full border rounded-lg px-3 py-2"></textarea>
          <button className="px-4 py-2 rounded-lg bg-primary text-white hover:shadow-[0_0_12px_#22c55e] transition">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
