"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code, Terminal, BrainCircuit, Github, ExternalLink, Database } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full-Stack', 'AI/ML', 'Web Dev', 'Python'];

  const projects = [
    { 
      title: 'LUMINA 1.0', 
      desc: 'Full-stack AI platform integrating models for content, code, and image generation with secure JWT/OAuth.', 
      tech: 'Next.js / Node.js / Express / MongoDB', 
      cat: 'Full-Stack', 
      live: 'https://lumina-chatbot-app-by-batool.vercel.app/',
      frontend: 'https://github.com/BatoolAmina/lumina-frontend',
      backend: 'https://github.com/BatoolAmina/lumina-backend'
    },
    { 
      title: 'MHC AI', 
      desc: 'Mental health classifier using BERT, RoBERTa, and Bi-LSTM for enhanced semantic and emotional understanding.', 
      tech: 'Next.js / Flask / Hugging Face / NLP', 
      cat: 'AI/ML', 
      live: 'https://mental-health-chatbot-app.vercel.app/',
      frontend: 'https://github.com/BatoolAmina/mental_health_frontend',
      backend: 'https://github.com/BatoolAmina/mental-health-backend'
    },
    { 
      title: 'SilverConnect', 
      desc: 'Full-stack platform enabling elderly users to connect with verified helpers for daily assistance.', 
      tech: 'Next.js / Node.js / Express.js / MongoDB', 
      cat: 'Full-Stack', 
      live: 'https://silver-connection.vercel.app/',
      frontend: 'https://github.com/BatoolAmina/silver-connect',
      backend: 'https://github.com/BatoolAmina/silver-connect-backend'
    },
    { 
      title: 'Plagiarism Checker', 
      desc: 'Multi-format document analysis (.pdf, .docx, .txt) with interactive similarity highlighting.', 
      tech: 'Python / NLP / Flask', 
      cat: 'Python', 
      live: 'https://plagiarismcheck.streamlit.app/',
      frontend: 'https://github.com/BatoolAmina/PlagiarismCheck'
    },
    { 
      title: 'Bandhu Enterprises', 
      desc: 'Professional business website with a modern UI and optimized cross-device compatibility.', 
      tech: 'React.js / TailwindCSS', 
      cat: 'Web Dev', 
      live: 'https://bandhuenterprises.in',
      frontend: 'https://github.com/BatoolAmina/bandhu-enterprises'
    },
    { 
      title: 'Hidden Hiring Gems', 
      desc: 'A curated job board for under-the-radar and niche career opportunities.', 
      tech: 'JavaScript / HTML / CSS', 
      cat: 'Web Dev', 
      live: 'https://batoolamina.github.io/Hidden-Hiring-Gems/',
      frontend: 'https://github.com/BatoolAmina/Hidden-Hiring-Gems/'
    },
    { 
      title: 'JS Music Player', 
      desc: 'Modern music player built with vanilla JavaScript and the Web Audio API.', 
      tech: 'JS / Web Audio API', 
      cat: 'Web Dev', 
      live: 'https://batoolamina.github.io/Drum-Kit/',
      frontend: 'https://github.com/BatoolAmina/Drum-Kit'
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
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 px-1 mb-4">{project.desc}</p>
                  
                  {/* Action Links */}
                  <div className="flex gap-3 mt-2">
                    {project.frontend && (
                      <a href={project.frontend} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all" title="Frontend Repo">
                        <Github size={16} />
                      </a>
                    )}
                    {project.backend && (
                      <a href={project.backend} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all" title="Backend Repo">
                        <Database size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-[#4caf50] hover:bg-[#f0f7f0] transition-all" title="Live Site">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="w-full mt-auto pt-4 border-t border-gray-50 flex flex-row items-center justify-between">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Stack</span>
                    <span className="text-[9px] font-black text-[#66bb6a] uppercase tracking-wider">{project.tech}</span>
                  </div>
                  <motion.a 
                    href={project.live} target="_blank"
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
