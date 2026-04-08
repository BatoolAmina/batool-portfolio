"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download, GraduationCap, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  const handleOpenResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.setAttribute("download", "Batool_Amina_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <AnimatedSection>
      <section id="about" className="container mx-auto px-6 max-w-7xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-[#f1f8f1] rounded-full blur-[120px] opacity-70" />

        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-6 bg-[#eaf5ea] rounded-[3rem] blur-3xl opacity-30" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#f0f7f0]">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="/batool.png"
                alt="Batool Amina"
                className="w-full h-[650px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                draggable={false}
              />
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#2d7a2d]">B.Tech Scholar</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[#81c784]" />
                <h2 className="text-[11px] uppercase tracking-[0.6em] text-[#66bb6a] font-bold">About Me</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[0.95] tracking-tighter uppercase">
                Building Purposeful Software
              </h3>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-500 text-xl leading-relaxed max-w-xl font-normal">
              Final-year Computer Science student at Integral University with an 82% aggregate. Dedicated to building high-performance MERN stack applications that prioritize user experience and scalable logic.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -8, borderColor: '#c8e6c9' }}
                className="p-10 bg-[#fbfdfb] rounded-[2.5rem] border border-[#f1f8f1] shadow-sm transition-all duration-500"
              >
                <GraduationCap className="text-[#4caf50] mb-6" size={36} />
                <h4 className="font-bold text-gray-900 uppercase text-[10px] tracking-widest mb-2">Academic Record</h4>
                <p className="text-sm text-gray-400 font-medium">Integral University — 82%</p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -8, borderColor: '#c8e6c9' }}
                className="p-10 bg-[#fbfdfb] rounded-[2.5rem] border border-[#f1f8f1] shadow-sm transition-all duration-500"
              >
                <Trophy className="text-[#4caf50] mb-6" size={36} />
                <h4 className="font-bold text-gray-900 uppercase text-[10px] tracking-widest mb-2">Innovation Award</h4>
                <p className="text-sm text-gray-400 font-medium">Siemens SHIFT Winner</p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <motion.button
                onClick={handleOpenResume}
                className="group relative bg-[#4caf50] text-white font-bold text-xs uppercase tracking-[0.4em] py-5 px-16 rounded-full shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-4">
                  View Full Resume <Download size={20} />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-[#2d7a2d]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;
