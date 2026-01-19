"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Palette, Cpu, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ExtraCurricular = () => {
  const activities = [
    {
      role: "Senior Coordinator",
      org: "Designing Team: Fiesta 2025",
      desc: "Leading the creative direction and visual design for the annual university flagship event.",
      icon: <Palette size={32} />
    },
    {
      role: "Student Coordinator",
      org: "TechFront 2025",
      desc: "Managing technical workshops and event logistics for the technology-focused symposium.",
      icon: <Cpu size={32} />
    },
    {
      role: "Active Member",
      org: "Art & Cultural Club",
      desc: "Contributing to the university's cultural landscape through artistic initiatives and collaboration.",
      icon: <Users size={32} />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <AnimatedSection>
      <section id="extracurricular" className="container mx-auto px-6 max-w-7xl relative">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div initial={{ width: 0 }} whileInView={{ width: "60px" }} className="h-[2px] bg-[#81c784] mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[0.95] tracking-widest uppercase">
            Beyond Code
          </h2>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.5em] mt-4">Leadership & Culture</p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((act, i) => (
            <motion.div key={i} variants={item} whileHover={{ y: -10 }} className="bg-white rounded-[2.5rem] p-10 border border-[#f0f7f0] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group">
              <div className="bg-[#f7faf7] text-[#4caf50] w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#4caf50] group-hover:text-white transition-all duration-500 shadow-sm group-hover:rotate-6">
                {act.icon}
              </div>
              <h3 className="text-2xl font-[Inter] font-bold text-gray-900 mb-2 tracking-tight uppercase group-hover:text-[#2d7a2d] transition-colors">{act.role}</h3>
              <p className="text-[#66bb6a] text-[11px] font-black uppercase tracking-[0.2em] mb-6">{act.org}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{act.desc}</p>
              <div className="mt-8 flex gap-1">
                {[...Array(3)].map((_, i) => <Star key={i} size={12} className="text-[#a5d6a7] opacity-40" />)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </AnimatedSection>
  );
};

export default ExtraCurricular;