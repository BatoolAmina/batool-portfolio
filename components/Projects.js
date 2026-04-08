"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code, Terminal, BrainCircuit } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full-Stack', 'AI/ML', 'Web Dev', 'Python'];

  const projects = [
    { 
      title: 'LUMINA 1.0', 
      desc: 'Full-stack AI platform integrating models for content, code, and image generation with secure JWT/OAuth.', 
      tech: 'Next.js / Node.js / AI APIs', 
      cat: 'Full-Stack', 
      link: '#' 
    },
    { 
      title: 'MHC AI', 
      desc: 'Mental health classifier using BERT, ROBERTa, and Bi-LSTM for semantic and emotional analysis.', 
      tech: 'Next.js / Flask / Hugging Face', 
      cat: 'AI/ML', 
      link: '#' 
    },
    { 
      title: 'SilverConnect', 
      desc: 'A community-centric platform designed for engagement and connectivity for senior citizens.', 
      tech: 'MERN Stack', 
      cat: 'Full-Stack', 
      link: 'https://silver-connection.vercel.app/' 
    },
    { 
      title: 'Plagiarism Checker', 
      desc: 'Multi-format document analysis (.pdf, .docx, .txt) with interactive similarity highlighting.', 
      tech: 'Python / NLP', 
      cat: 'Python', 
      link: 'https://github.com/BatoolAmina/PlagiarismCheck' 
    },
    { 
      title: 'Bandhu Enterprises', 
      desc: 'Social impact project providing digital infrastructure for community-based services.', 
      tech: 'Next.js / Tailwind', 
      cat: 'Web Dev', 
      link: 'https://bandhu-enterprises.vercel.app' 
    },
    { 
      title: 'Pet-Friendly City', 
      desc: 'A web app to help pet owners find friendly places in their urban areas.', 
      tech: 'React / CSS', 
      cat: 'Web Dev', 
      link: 'https://batoolamina.github.io/Pet-Friendly-City/' 
    },
    { 
      title: 'Hidden Hiring Gems', 
      desc: 'A curated job board for under-the-radar and niche career opportunities.', 
      tech: 'JavaScript', 
      cat: 'Web Dev', 
      link: 'https://batoolamina.github.io/Hidden-Hiring-Gems/' 
    },
    { 
      title: 'JavaScript Music Player', 
      desc: 'Modern music player built with vanilla JavaScript and the Web Audio API.', 
      tech: 'JS / Audio API', 
      cat: 'Web Dev', 
      link: 'https://batoolamina.github.io/CodeAlpha_Music-player-using-JavaScript/' 
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.cat === filter);

  return (
    <AnimatedSection>
      <section id="projects" className="container mx-auto max-w-7xl relative py-8 px-6">
        <div className="flex flex-col items-center mb-8 text-center">
          <motion.div initial={{ width: 0 }} whileInView={{ width: "50px" }} className="h-[2px] bg-[#81c784] mb-3" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[0.95] tracking-widest uppercase">
            My Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${
                  filter === cat ? "bg-gray-900 text-white shadow-md" : "bg-white text-gray-400 border border-gray-100 hover:border-[#c8e6c9]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[1.5rem] p-6 border border-[#f0f7f0] shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="flex flex-col items-center w-full mb-4">
                  <div className="relative mb-4">
                    <div className="p-3.5 bg-[#f7faf7] text-[#4caf50] rounded-xl group-hover:bg-[#4caf50] group-hover:text-white transition-all duration-300 shadow-sm group-hover:rotate-6">
                      {project.cat === 'AI/ML' ? <BrainCircuit size={22} /> : project.cat === 'Python' ? <Terminal size={22} /> : <Code size={22} />}
                    </div>
                    <span className="absolute -top-1 -right-6 text-[8px] font-black text-gray-300 uppercase">/0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-[Inter] font-bold text-gray-900 mb-2 tracking-tight group-hover:text-[#2d7a2d] transition-colors uppercase">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 px-1">{project.desc}</p>
                </div>

                <div className="w-full mt-auto pt-4 border-t border-gray-50 flex flex-row items-center justify-between">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Stack</span>
                    <span className="text-[9px] font-black text-[#66bb6a] uppercase tracking-wider">{project.tech}</span>
                  </div>
                  <motion.a 
                    href={project.link} target="_blank"
                    whileHover={{ scale: 1.1, rotate: 10, backgroundColor: "#1b5e20" }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-md transition-all"
                  >
                    <ArrowUpRight size={18} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </AnimatedSection>
  );
};

export default Projects;
