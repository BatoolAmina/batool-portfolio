"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Server, Wrench, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Palette size={32} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'],
    },
    {
      title: 'Backend',
      icon: <Server size={32} />,
      skills: ['Node.js', 'Express.js', 'Java', 'Python', 'SQL'],
    },
    {
      title: 'Systems',
      icon: <Globe size={32} />,
      skills: ['MERN Stack', 'API Testing', 'Gen AI', 'CRUD'],
    },
    {
      title: 'Workflow',
      icon: <Wrench size={32} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Canva'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <AnimatedSection>
      <section id="skills" className="container mx-auto px-6 py-14 max-w-7xl relative">
        
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 w-96 h-96 bg-[#f1f8f1] rounded-full blur-[120px] opacity-60" />

        <div className="flex flex-col items-center mb-20">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-[2px] bg-[#81c784] mb-6"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[0.95] tracking-widest uppercase">
            Technical Stack
          </h2>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.5em] mt-4">
            Tools & Expertise
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="bg-white rounded-[2.5rem] p-10 border border-[#f0f7f0] shadow-sm hover:shadow-2xl hover:border-[#c8e6c9] transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                {category.icon}
              </div>

              <div className="bg-[#f7faf7] text-[#4caf50] w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#4caf50] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:rotate-6">
                {React.cloneElement(category.icon, { size: 36 })}
              </div>
              
              <h3 className="text-2xl font-[Inter] font-black text-gray-900 mb-6 tracking-tighter uppercase">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "#4caf50", 
                      color: "#ffffff",
                      borderColor: "#4caf50" 
                    }}
                    className="bg-[#fbfdfb] text-gray-500 text-[10px] font-bold px-5 py-2 rounded-full border border-[#f1f8f1] uppercase tracking-[0.15em] transition-all duration-300 cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </AnimatedSection>
  );
};

export default Skills;