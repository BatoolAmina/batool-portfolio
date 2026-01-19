"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { name: "Email", href: "mailto:batool.amina.110@gmail.com" },
    { name: "LinkedIn", href: "https://linkedin.com/in/batool-amina" },
    { name: "GitHub", href: "https://github.com/BatoolAmina" },
  ];

  return (
    <footer className="py-12 border-t border-gray-100 bg-[#fcfdfc] px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-3xl font-black tracking-tighter text-slate-900 uppercase">
            Batool Amina
          </h2>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest">
            Innovating through full-stack development
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-[#4caf50] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="px-4 py-1.5 border border-[#e8f5e9] rounded-full text-[9px] text-[#81c784] font-bold uppercase tracking-widest bg-white shadow-sm"
          >
            Lucknow, India — 2026
          </motion.div>
        </div>

      </div>
    </footer>
  );
}