"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Internships = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Digipodium",
      duration: "2025",
      location: "Lucknow, India",
      description: "Developed modern web application workflows and refined front-end logic for professional digital solutions.",
      skills: ["Full-Stack", "JavaScript", "Logic"]
    },
    {
      role: "Web Development Intern",
      company: "Shuttr Troops LLP.",
      duration: "2025",
      location: "Lucknow, India",
      description: "Collaborated on industry-grade web projects to deliver high-performance and accessible user interfaces.",
      skills: ["Frontend", "Performance", "HTML/CSS"]
    },
    {
      role: "Web Development Intern",
      company: "CollegeTips.in",
      duration: "2025",
      location: "Remote",
      description: "Enhanced student resource portals and optimized UI components to drive higher user engagement.",
      skills: ["UI/UX", "Optimization", "React"]
    },
    {
      role: "Front-End Development Intern",
      company: "CodeAlpha",
      duration: "2024",
      location: "Remote",
      description: "Engineered responsive components and interactive web layouts using modern framework architectures.",
      skills: ["React", "JavaScript", "Tailwind"]
    },
    {
      role: "Python Developer Intern",
      company: "Codsoft",
      duration: "2024",
      location: "Remote",
      description: "Built automated systems and security-focused applications using advanced Python scripting.",
      skills: ["Python", "Automation", "Security"]
    },
    {
      role: "Front-End Development Intern",
      company: "1 Stop",
      duration: "2023",
      location: "Remote",
      description: "Gained foundational expertise in semantic web design and responsive architecture for the modern web.",
      skills: ["CSS3", "Design", "Accessibility"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
    show: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <AnimatedSection>
      <section id="experience" className="container mx-auto px-6 max-w-7xl relative font-sans">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-2xl h-80 bg-[#f1f8f1] rounded-full blur-[120px] opacity-40" />

        <div className="flex flex-col items-center mb-12 text-center">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "50px" }}
            className="h-[2px] bg-[#81c784] mb-4"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[0.95] tracking-widest uppercase">
            Career Journey
          </h2>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em] mt-2">
            Professional Timeline
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2rem] p-8 border border-[#f0f7f0] shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center h-full"
            >
              <div className="bg-[#f7faf7] text-[#4caf50] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4caf50] group-hover:text-white transition-all duration-500 group-hover:rotate-3">
                <Briefcase size={28} />
              </div>

              <div className="mb-4 flex flex-col items-center">
                <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                   <Calendar size={10} className="text-[#a5d6a7]" /> {exp.duration}
                </span>
                <h3 className="text-xl font-[Inter] font-bold text-gray-900 mb-0.5 tracking-tight uppercase group-hover:text-[#2d7a2d] transition-colors">
                  {exp.role}
                </h3>
                <p className="text-[#66bb6a] text-[10px] font-black uppercase tracking-[0.15em]">
                  {exp.company}
                </p>
              </div>

              <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
                {exp.description}
              </p>

              <div className="w-full pt-6 border-t border-gray-50 flex flex-col items-center gap-4 mt-auto">
                <div className="flex items-center gap-1.5 text-[#a5d6a7]">
                  <MapPin size={10} />
                  <span className="text-[8px] font-black uppercase tracking-widest">{exp.location}</span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-1.5">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-gray-400 text-[8px] font-bold px-3 py-1 rounded-full border border-[#f1f8f1] uppercase tracking-wider hover:bg-[#e8f5e9] hover:text-[#2d7a2d] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </AnimatedSection>
  );
};

export default Internships;